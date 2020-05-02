import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export default function Alert(text) {
  const alerta = withReactContent(Swal);
  return (
    alerta.fire(text)
  );
}
