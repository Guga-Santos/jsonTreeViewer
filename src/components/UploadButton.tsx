'use client';

import { useState } from 'react';

export const UploadButton = () => {
  const [file, setFile] = useState<any>(null);

  function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const selectedFile = event.target.files?.[0];

    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = (e) => {
        // Verifica se e.target é nulo antes de acessar e.target.result
        if (e.target) {
          // O JSON analisado está em e.target.result
          const jsonContent = e.target.result;

          // Agora você pode definir o JSON no estado
          setFile(jsonContent);
        }
      };

      // Lê o arquivo como texto (JSON)
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
