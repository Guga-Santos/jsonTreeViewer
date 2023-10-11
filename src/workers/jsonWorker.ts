type WorkerMessage = {
  data: any;
};

self.onmessage = function (e: MessageEvent<WorkerMessage>) {
  const data = e.data;
  const result = processData(data);
  self.postMessage(result);
};

function processData(data: any): any {
  const reader = new FileReader();
  let processedData;

      reader.onload = (e) => {

        if (e.target) {
          const jsonContent = e.target.result as string;

          try {
            const jsonObject = JSON.parse(jsonContent);
            processedData = jsonObject;
          } catch (error) {
            console.error('Erro ao analisar o JSON:', error);
          }
        }
      };
      reader.readAsText(data);
  return processedData;
}
