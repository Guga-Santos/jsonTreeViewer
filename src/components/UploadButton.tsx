'use client';

import { useState } from 'react';

export const UploadButton = () => {
  const [file, setFile] = useState<any>(null);

  function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const selectedFile = event.target.files?.[0];

    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = (e) => {

        if (e.target) {
          const jsonContent = e.target.result as string;

          try {
            const jsonObject = JSON.parse(jsonContent);
            setFile(jsonObject);
          } catch (error) {
            console.error('Erro ao analisar o JSON:', error);
          }
        }
      };
      reader.readAsText(selectedFile);
    }
  }

  return (
    <div
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
    >
      <input
        type="file"
        accept=".json"
        id="jsonUpload"
        onChange={(e) => handleFileUpload(e)}
        className="select-none cursor-pointer hidden"
      />
      <label htmlFor="jsonUpload" className="select-none">
        Load JSON
      </label>
    </div>
  );
};
