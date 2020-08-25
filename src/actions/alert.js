// importing the swal from sweetalert for showing the alerts
import swal from "sweetalert";

// function for showing the success messge alert when any update or some task done
export function successMessageAlert(title, message) {
  swal({
    title: title,
    text: message,
    icon: "success",
    button: "Ok",
  });
}

// is any alert are given to the user
export function alertMessage(title, message) {
  swal({
    title: title,
    text: message,
    icon: "warning",
    button: "Ok",
  });
}
