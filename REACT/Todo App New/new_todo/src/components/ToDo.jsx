import React from 'react';




const ToDo = ({ toDo, markDone, setUpdateData, deleteTask }) => {
  return(
    <>
      {toDo && toDo
      .sort((a, b) => {
        if (a.id > b.id) {
            return 1;
          }
          if (a.id < b.id) {
            return -1;
          }
      })
      .map( (task, index) => {
        return(
          <React.Fragment key={task.id}>
            <div className="col taskBg">
              <div className={ task.status ? 'done' : '' }>
                <span className="taskNumber">{index + 1}</span>
                <span className="taskText">{task.title}</span>
              </div>
              <div className="iconsWrap">
                <span title="Completed / Not Completed"
                  onClick={ (e) => markDone(task.id) }
                >
         <i class="fa-solid fa-clipboard-list"></i>
                </span>

                {task.status ? null : (
                  <span title="Edit"
                    onClick={ () => setUpdateData({ 
                      id: task.id, 
                      title: task.title, 
                      status: task.status ? true : false
                    }) }
                  >
             <i class="fa-solid fa-pen"></i>
                  </span>
                )}

                <span title="Delete"
                  onClick={() => deleteTask(task.id)}
                >
              <i class="fa-solid fa-trash"></i>
                </span>
              </div>
            </div>
          </React.Fragment>
        )
      })
      }  
    </>
  )
}

export default ToDo;