//import { ensureIsList } from "@shared";

class DownloadInfo {
  public docId: number = null;
  public fileName: string = null;
  public fileRefId: any;
  public codeOnFormIdentifier: string;
  public fileContent: number[];

  public static transform(source: File | FileList, codeOnFormIdentifier = "") {
    const files: File[] =
      source instanceof FileList ? Array.from(source) : [source];

    return Promise.all(
      files.map(
        file =>
          new Promise<DownloadInfo>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
              resolve({
                docId: 0,
                fileName: file.name,
                fileRefId: null,
                codeOnFormIdentifier,
                fileContent: Array.from(
                  new Uint8Array(reader.result as ArrayBuffer)
                )
              });
            };

            reader.readAsArrayBuffer(file);
          })
      )
    );
  }
}

export { DownloadInfo };
