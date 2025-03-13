import React from 'react'

const FormContainer = (props) => {

    console.log("props ",props);// obj

    
    let {handleSubmit,course,trainer,handleChange}=props;

    
  return (
    <>
        <form onSubmit={handleSubmit} className='formContainer'>
            <h1>Enter the details in below form</h1>
            <div>
                <label htmlFor="cname">COURSE : </label>
                <input type="text" id='cname'
                    name='course'
                    value={course}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="tname">TRAINER : </label>
                <input type="text" id='tname'
                    name='trainer'
                    value={trainer}
                    onChange={handleChange}
                />
            </div>
            <div id='submitBtn'>
                <button>SUBMIT</button>
            </div>
        </form>
    </>
  )
}

export default FormContainer