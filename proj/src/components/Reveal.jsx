import { useEffect, useRef, useState } from 'react'
// Revela el contenido al entrar en pantalla. Sin JS/IO o con movimiento reducido, todo queda visible (ver CSS).
export default function Reveal({ as: Tag = 'div', className = '', children, ...p }) {
  const ref = useRef(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return setOn(true)
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setOn(true), io.disconnect()), { threshold: 0.15 })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])
  return <Tag ref={ref} className={`reveal ${on ? 'in' : ''} ${className}`} {...p}>{children}</Tag>
}
