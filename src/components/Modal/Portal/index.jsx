import ReactDOM from 'react-dom'

export default function PortalModal({ children }) {
  return ReactDOM.createPortal(children, document.getElementById('portal'))
}
