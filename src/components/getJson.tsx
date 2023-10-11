export default function GetJson() {
  return (
    <div>
      <input
        type="file"
        accept=".json"
        style={{ display: 'none' }}
        id="jsonUpload"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        />
      <label 
      htmlFor="jsonUpload"
      >
        Load JSON
      </label>
    </div>
  )
}