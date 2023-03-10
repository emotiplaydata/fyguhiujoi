import { useContext, useEffect, useRef } from "react"
import { Storage } from "../App"
import Button from 'react-bootstrap/Button';


const WidgetUpload = () => {
    const { setCloudinaryLink } = useContext(Storage)

    const cloudinaryRef = useRef()
    const widgetRef = useRef()
    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'dsgdoguhb',
            uploadPreset: "gbpggwot"
        }, (error, result) => {
            if (error) {
                console.log(error);
            }
            else {
                console.log("hereeee", result.info.url);
            }
            if (result.info.url) {
                setCloudinaryLink(result.info.url);
            }
        })
    }, [])
    return (
        <div className="h-50 w-75 p-2  d-flex justify-content-center">
            <Button variant="primary" 
            className="btn btn-primary h-100 w-100 d-flex justify-content-center flex-column align-items-center rounded-pill" size="lg"
                onClick={() => widgetRef.current.open()}>
                <svg xmlns="http://www.w3.org/2000/svg"
                    width="60" height="60" fill="currentColor"
                    class="bi bi-file-earmark-arrow-up" viewBox="0 0 16 16">
                    <path d="M8.5 11.5a.5.5 0 0 1-1 0V7.707L6.354 8.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 7.707V11.5z" />
                    <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                </svg>
                upload your video
            </Button>
        </div>

    )
}
export default WidgetUpload

// function showUploadWidget() {
//     cloudinary.openUploadWidget({
//        cloudName: "<cloud name>",
//        uploadPreset: "<upload preset>",
//        sources: [
//            "local",
//            "camera",
//            "google_drive",
//            "facebook"
//        ],
//        googleApiKey: "<image_search_google_api_key>",
//        showAdvancedOptions: true,
//        cropping: true,
//        multiple: false,
//        defaultSource: "local",
//        styles: {
//            palette: {
//                window: "#F0F0FF",
//                sourceBg: "#F0F0FF",
//                windowBorder: "#929292",
//                tabIcon: "#000000",
//                inactiveTabIcon: "#0D6EFD",
//                menuIcons: "#366CA3",
//                link: "#E72651",
//                action: "#339933",
//                inProgress: "#030717",
//                complete: "#339933",
//                error: "#FF2828",
//                textDark: "#FFFFFF",
//                textLight: "#2DAB57"
//            },
//            fonts: {
//                default: null,
//                "'Merriweather', serif": {
//                    url: "https://fonts.googleapis.com/css?family=Merriweather",
//                    active: true
//                }
//            }
//        }
//    },
//     (err, info) => {
//       if (!err) {    
//         console.log("Upload Widget event - ", info);
//       }
//      });
//     }