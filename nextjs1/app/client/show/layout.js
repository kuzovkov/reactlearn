import { Poppins } from "next/font/google";
import "./style.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function ClientShowLayout({ children }) {
  return (
    <div className={poppins.className}>
      <h1>Top Info</h1>
      {children}
    </div>
  );
}
