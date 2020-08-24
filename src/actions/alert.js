import swal from "sweetalert";

export function successMessageAlert(title, message) {
  swal({
    title: title,
    text: message,
    icon: "success",
    button: "Ok",
  });
}
