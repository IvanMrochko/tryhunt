import { AxiosResponse } from 'axios';
/*
*  Function for download any type of files
* */
function downloadFile(response: AxiosResponse<File | Blob>, id: string): void {
  const type = response.request.getResponseHeader('Content-Type');
  const file = response.data;
  const fileName = id.substr(id.indexOf('_') + 1);

  const blob =
    typeof File === 'function' ? new File([file], fileName, { type: type }) : new Blob([file], { type: type });
  if (typeof window.navigator.msSaveBlob !== 'undefined') {
    // IE workaround for "HTML7007: One or more blob URLs were revoked by closing the blob for which they were created. These URLs will no longer resolve as the data backing the URL has been freed."
    window.navigator.msSaveBlob(blob, fileName);
  } else {
    const URL = window.URL || (window as any).webkitURL;
    const downloadUrl = URL.createObjectURL(blob);

    if (fileName) {
      // use HTML5 a[download] attribute to specify filename
      const a = document.createElement('a');
      // safari doesn't support this yet
      if (typeof a.download === 'undefined') {
        window.location = downloadUrl;
      } else {
        a.href = downloadUrl;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
      }
    } else {
      window.location = downloadUrl;
    }

    setTimeout(function() {
      URL.revokeObjectURL(downloadUrl);
    }, 100);
  }
}

export { downloadFile };
