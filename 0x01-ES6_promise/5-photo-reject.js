export default function uploadPhoto(fileName) {
  return new Promise((resolve, reject) => {
    // Simulating an error condition where the file cannot be processed
    // In a real scenario, the actual implementation to handle the file processing would be here

    const errorMessage = `${fileName} cannot be processed`;
    reject(new Error(errorMessage));
  });
}

