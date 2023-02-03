import React, { useState } from 'react'
import { connect } from 'react-redux'
import { actionAddTask, actionRemoveTask, actionEditTask, actionChangeEditor} from '../store/actions'
import { AiFillEdit } from 'react-icons/ai'
import { MdAddCircle } from 'react-icons/md'
import { MdRemoveCircle } from 'react-icons/md'
import { TodoTask, AreaAddEditTask, AreaTask,ButtonAddEditTask, ButtonRemove, ButtonEdit } from '../styles'

const Todo = ({
  addTask, removeTask,changeEditor,actionEditTask,
   tasks, editor, idToEdit}) => {  
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    const id = tasks.length === 0 ? 0 : +tasks[tasks.length - 1].id + 1;
    const obj = { task, id}
    addTask(obj)
    setTask("");
  }

  const handleEditTask = () => {
    const arrFilter = tasks.filter((e) => e.id !== idToEdit);
    const newObj = { task, id: idToEdit}
    const newList = [...arrFilter, newObj]
    actionEditTask(newList);
    changeEditor(0);
  }

 

  return (
    <TodoTask>
      <AreaAddEditTask>
        <input 
          type="text" 
          value={task}
          onChange={({target: {value}}) => setTask(value)}
          placeholder='Digite aqui uma anotação' />
        <div>
          {
            !editor ? (
              <ButtonAddEditTask onClick={handleAddTask}>
                <MdAddCircle />
              </ButtonAddEditTask>
            )
            :
            <ButtonAddEditTask 
              onClick={handleEditTask}
              >
                <AiFillEdit/>
            </ButtonAddEditTask>
          }
        </div>
        
      
      </AreaAddEditTask>
        

        <AreaTask>
          {
            tasks.sort((a,b) => a.id-b.id).map((e) => (
              <div key={e.id}>
                <div>
                  <p>{e.task}</p>
                </div>
                

                <ButtonRemove onClick={() => removeTask(e)}>
                  <MdRemoveCircle />
                </ButtonRemove>

                  <ButtonEdit onClick={() => changeEditor(e.id)}>
                      <AiFillEdit/>
                  </ButtonEdit>
                
              </div>
            ))
          }
        </AreaTask>

    </TodoTask>
  )
}

const mapDispatchToProps = (dispatch) => ({
    addTask: (task) => dispatch(actionAddTask(task)),
    removeTask: (task) => dispatch(actionRemoveTask(task)),
    changeEditor: (id ) => dispatch(actionChangeEditor(id)),
    actionEditTask: (todo) => dispatch(actionEditTask(todo))
})

const mapStateToProps = (state) => ({
  tasks: state.tasks,
  editor: state.editor,
  idToEdit: state.idToEdit
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo);