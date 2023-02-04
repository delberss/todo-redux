import styled from 'styled-components'

export const TodoTask = styled.div`
  display: flex;
  align-items: center;

    flex-direction: column;

    width: 100vw;
    height: 100vh;
    background-color: #263238;
`
export const AreaAddEditTask = styled.div`
    display: flex;
    align-items: start;
    justify-content: space-between;
    background-color:#263238;
    width: 50%;

    input{
        margin: 10px 0;
        outline: none;
        padding: 0 10px 10px;
        width: 80%;
        height: 50px;
        border: none;
        border-radius: 5px;
        font-size: 1.3em;
    }

    div{
      width: 20%;
      display: flex;
      justify-content: left;
      padding: 0px;
      margin: 0px;
    }
`

export const ButtonAddEditTask = styled.button`
  font-size: 2rem;
  border: none;
  margin: 5px 0;
  cursor: pointer;
  background-color: transparent;
  color: rgb(50 150 200);
  height: 80px;
`

export const AreaTask = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px auto;

    width: 50%;
    flex-direction: column;

    div{
        display:flex;
        justify-content: space-between;
        margin: 10px;
        padding: 6px 0px;
        background-color: white;
        border-radius: 5px;
        width: 100%;
        background-color: #5734a4;
        color: white;

        div{
          padding: 0px 10px;
        }
    }
`

export const ButtonRemove= styled.button`
  font-size: 2rem;
  border: none;
  margin: 5px;
  cursor: pointer;
  background-color: transparent;
`

export const ButtonEdit= styled.button`
  font-size: 2rem;
  border: none;
  margin: 5px;
  cursor: pointer;
  background-color: transparent;
  color: rgb(50 150 200);
`