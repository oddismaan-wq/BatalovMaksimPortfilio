.mobile-nav{
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  z-index: 30;

  background: rgba(11,18,32,.92);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);

  padding: 12px 4vw 16px;

  display: grid;
  gap: 10px;

  /* важно: по умолчанию скрыто */
  transform: translateY(-120%);
  opacity: 0;
  pointer-events: none;
  transition: transform .18s ease, opacity .18s ease;
}

.mobile-nav.open{
  transform: translateY(0);
  opacity: 1;
  pointer-events: auto;
}

.mobile-nav a{
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: rgba(255,255,255,.03);
  color: var(--text);
  font-weight: 800;
}
