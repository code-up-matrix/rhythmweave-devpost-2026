import "./styles.css";
import type {ReactNode} from "react";
export const metadata={title:"RhythmWeave",description:"Compose rhythmic patterns and export deterministic, accessible vector art with its recipe."};
export default function Layout({children}:{children:ReactNode}){return <html lang="en"><body className="lab">{children}</body></html>;}
