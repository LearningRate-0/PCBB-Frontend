import React, {useMemo} from 'react';
import {useDropzone} from 'react-dropzone';
import './CSVDrop.css'
import download from './download.svg'

const maxLength=20;

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#437fc7',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

const focusedStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

export default function Basic({setFile}) {


  function nameLengthValidator(tempfile) {
    if (tempfile.name.length > maxLength) {
      return {
        code: "name-too-large",
        message: `Name is larger than ${maxLength} characters`
      };
    }
  
    return null
  }
  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
    acceptedFiles,
    fileRejections,
    open
  } = useDropzone({
    accept: {
      'text/csv': ['.csv'],
    },  
    maxFiles:1,
    validator: nameLengthValidator,
    noClick: true,
    noKeyboard: true,
    onDrop: (acceptedFiles)=>{
      console.log(acceptedFiles[0])
      setFile(acceptedFiles[0]);
    }
    });

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isFocused ? focusedStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isFocused,
    isDragAccept,
    isDragReject
  ]);

  const acceptedFileItems = acceptedFiles.map(file => (
    <>
      <span key={file.path} style={{color:"#6daffe"}}>
        {file.path} - {file.size} bytes
      </span>
    </>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors  }) => { 
   return (
     <div key={file.path}>
        {errors.map(e => <><span className="text-danger" key={e.code}>{e.message}</span><br/></>)}
     </div>
   ) 
  });

  return (
    <div>
      <div className="box-wrapper" {...getRootProps({style})}>
        <img src={download} alt="download" className="download"/>
        <input id='file' {...getInputProps()} />
        <button className='selectCSV' type="button" onClick={open}>
          Select CSV File
        </button>
        <span className='dropItHere'>or drop it here</span>
        <aside className='text-center'>
          {acceptedFileItems}
          {fileRejectionItems}
        </aside>
      </div>
    </div>
  );
}