// src/components/Modal.js
import upload from "../images/upload-cloud-02.svg";
import close from "../images/close.svg";
import "../App.css";

interface Props {
  onClose: () => void;
}

const Modal = ({ onClose }: Props) => {
  const handleUploadClick = () => {
    const fileInput = document.querySelector(".fileInput");
    fileInput.click();
  };

  const handleFileSelection = (event: { target: { files: any[]; }; }) => {
    const selectedFile = event.target.files[0]; // Get the first selected file
    if (selectedFile) {
      // You can do further processing, such as uploading the file or displaying its details.
      console.log("Selected file:", selectedFile);
    }
  };

  return (
    <div className="modal">
      <div className="floating">
        <div className="item-div">
          <div className="text-float float-width">
            <p className="trans-float">Transcribe File</p>
            <img src={close} alt="" onClick={onClose} />
          </div>

          <div className="drop-down float-width">
            <label htmlFor="myDropdown">
              <p className="trans-lang">Transcription Language</p>
            </label>
            <br />
            <select id="myDropdown">
              <option value="option1">Default</option>
              <option value="option2">English</option>
              <option value="option2">Spanish</option>
              <option value="option2">Latin</option>
              <option value="option2">Chinese</option>
            </select>
          </div>

          <div className="drop-area float-width">
            <div className="circle">
              <img src={upload} alt="Circular Image" />
            </div>

            <div className="fileList">
              <input
                type="file"
                id="fileInput"
                className="fileInput"
                style={{ display: "none" }}
              />

              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={handleFileSelection}
              />

              <p>
                <span className="upload-text">
                  {" "}
                  <a
                    href="#"
                    className="uplaodButton"
                    onClick={handleUploadClick}
                  >
                    {" "}
                    click to upload
                  </a>{" "}
                  or drag to drop here
                </span>
                <br /> The maximum file size is 1GB for audion and 10GB ffor
                videos.
                <br />
                Supported formats: mp3, mp4, wav, caf, aiff, avi, rmvb, flv,
                m4a, mov, wmv, wma
              </p>
            </div>
          </div>

          <div className="float-width">
            <label htmlFor="linkInput" className="import-link">
              Import from link:
            </label>
            <br />
            <input
              type="text"
              className="import-link-box"
              placeholder="Paste a drop box, Google Drive or YouTube URL here"
            />
          </div>

          <div className="check float-width">
            <input type="checkbox" className="speakerIdentification" />
            <label htmlFor="speakerIdentification">
              Speaker identification
            </label>
          </div>

          <div className="trans-b float-width">
            <button className="trans-btn">
              <p className="trans-btn-text">Transcribe File</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
