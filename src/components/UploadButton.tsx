'use client'

export const UploadButton = () => {

  function handleFileUpload() {
    
  }

  return (
    <div
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:cursor-pointer"
    >
      <input
        type="file"
        accept=".json"
        style={{ display: 'none' }}
        id="jsonUpload"
        onChange={() => handleFileUpload()}
        className="select-none"
        />
      <label 
      htmlFor="jsonUpload"
      className="select-none"
      >
        Load JSON
      </label>
    </div>
  )
}