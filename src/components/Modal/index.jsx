import React from 'react'
import { useEffect } from 'react'
import Portal from './Portal'
import { Dialog, Overlay } from './styles'

export function Modal({ children, isOpen, onClose }) {
  useEffect(() => {
    function onEsc(e) {
      if (e.keyCode === 27) onClose()
    }
    window.addEventListener('keydown', onEsc)

    return () => {
      window.removeEventListener('keydown', onEsc)
    }
  }, [onClose])

  if (!isOpen) return null

  function onDialogClick(e) {
    e.stopPropagation()
  }

  return (
    <Portal>
      <Overlay onClick={onClose}>
        <Dialog onClick={onDialogClick}>{children}</Dialog>
      </Overlay>
    </Portal>
  )
}
