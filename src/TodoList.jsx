import React, { Fragment } from 'react'

const TodoList = (props) => {
  console.log(props);
  let {items,handleDelete,handleEdit}=props;
  return (
    <>
        <table border={"1px"} cellPadding={"10px"} cellSpacing={"0px"} width={"500px"}>
          <thead>
            <tr>
              <th>COURSE</th>
              <th>TRAINER</th>
              <th>MORE OPTIONS</th>
            </tr>
          </thead>
          <tbody>
            {items.length>0 && items.map((val)=>{
              return (
                <Fragment key={val.id}>
                  <tr >
                    <td>{val.course}</td>
                    <td>{val.trainer}</td>
                    <td>
                      <button onClick={()=>{handleDelete(val.id)}} id='delete-btn'>DELETE</button> 
                      {/* inline fun */}
                      <button onClick={()=>{handleEdit(val.id)}} id='edit-btn'>UPDATE</button>
                    </td>
                  </tr>
                </Fragment>
              )
            })}
          </tbody>
        </table>
    </>
  )
}

export default TodoList