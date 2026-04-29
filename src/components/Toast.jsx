import React, { useState, useEffect, useCallback, useRef } from 'react'
import ReactDOM from 'react-dom'
import { FiCheck, FiX, FiAlertCircle, FiInfo } from 'react-icons/fi'
import './Toast.css'

// Use window-level event system so it works across HMR module instances
const TOAST_EVENT = 'app:toast'
let globalToastId = 0

function fireToast(type, title, message) {
  globalToastId++
  window.dispatchEvent(new CustomEvent(TOAST_EVENT, {
    detail: { id: globalToastId, type, title, message }
  }))
}

// Public API
export const toast = {
  success: (title, message) => fireToast('success', title, message),
  error: (title, message) => fireToast('error', title, message),
  info: (title, message) => fireToast('info', title, message),
}

export function useToast() {
  return toast
}

export function ToastContainer() {
  const [toasts, setToasts] = useState([])
  const timersRef = useRef({})

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.map(t => t.id === id ? { ...t, exiting: true } : t))
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id))
    }, 300)
    if (timersRef.current[id]) {
      clearTimeout(timersRef.current[id])
      delete timersRef.current[id]
    }
  }, [])

  useEffect(() => {
    const handler = (e) => {
      const newToast = e.detail
      setToasts(prev => [...prev, { ...newToast, exiting: false }])
      timersRef.current[newToast.id] = setTimeout(() => removeToast(newToast.id), 4000)
    }
    window.addEventListener(TOAST_EVENT, handler)
    return () => window.removeEventListener(TOAST_EVENT, handler)
  }, [removeToast])

  const iconMap = {
    success: <FiCheck />,
    error: <FiAlertCircle />,
    info: <FiInfo />,
  }

  return ReactDOM.createPortal(
    <div className="toast-container" id="toast-container" role="alert" aria-live="polite">
      {toasts.map(t => (
        <div key={t.id} className={`toast toast-${t.type} ${t.exiting ? 'toast-exit' : ''}`}>
          <div className="toast-icon">{iconMap[t.type]}</div>
          <div className="toast-content">
            <div className="toast-title">{t.title}</div>
            {t.message && <div className="toast-message">{t.message}</div>}
          </div>
          <button className="toast-close" onClick={() => removeToast(t.id)} aria-label="Dismiss">
            <FiX />
          </button>
        </div>
      ))}
    </div>,
    document.body
  )
}
