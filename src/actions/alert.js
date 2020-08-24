import swal from "sweetalert";

export function errorMessageAlert(title, error) {
  swal({
    title: title,
    text: error,
    icon: "warning",
    button: "Ok",
  });
}

export function successMessageAlert(title, message) {
  swal({
    title: title,
    text: message,
    icon: "success",
    button: "Ok",
  });
}
