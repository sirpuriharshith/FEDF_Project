import Navbar from './Navbar';
import AiBubble from './AiBubble';
export default function PageShell({ title, subtitle, children, wide=false }) {
  return <><Navbar/><main className={wide ? 'container wide' : 'container'}><section className="page-head"><h1>{title}</h1>{subtitle && <p>{subtitle}</p>}</section>{children}</main><footer className="footer">© 2026 MediAssist — A smarter way to care for yourself.<span>Not a substitute for professional medical advice.</span></footer><AiBubble/></>;
}
