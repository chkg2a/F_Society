import { FaGithub, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import {Link} from "react-router-dom"

const UpperFooter = () => {
  return (
    <div className="w-full flex items-start justify-evenly gap-4">
      <div>
        <div>Language</div>
        <div className="flex gap-4">
          <Link to="https://github.com/chkg2a/dappchapp" target="_blank">
            <FaGithub />
          </Link>
          <Link to="https://youtube.com" target="_blank">
            <FaYoutube />
          </Link>
          <Link to="https://x.com" target="_blank">
            <FaSquareXTwitter />
          </Link>
        </div>
      </div>
      <div>
        <div>
          <ul className="flex flex-col gap-1">
            <li><h1 className="text-slate-100 font-semibold">Product</h1></li>
            <li><Link to="#">Download</Link></li>
            <li><Link to="#">Status</Link></li>
            <li><Link to="#">Source Code</Link></li>
            <li><Link to="#">Mobile</Link></li>
          </ul>
        </div>
      </div>
      <div>
        <div>
          <ul className="flex flex-col gap-1">
            <li><h1 className="text-slate-100 font-semibold">Company</h1></li>
            <li><Link to="#">About</Link></li>
            <li><Link to="#">Jobs</Link></li>
            <li><Link to="#">Brand</Link></li>
          </ul>
        </div>
      </div>
      <div>
        <div>
          <ul className="flex flex-col gap-1">
            <li><h1 className="text-slate-100 font-semibold">Policies</h1></li>
            <li><Link to="#">Terms</Link></li>
            <li><Link to="#">Privacy</Link></li>
            <li><Link to="#">Cookie Settings</Link></li>
            <li><Link to="#">Guidelines</Link></li>
            <li><Link to="#">Acknowledgements</Link></li>
            <li><Link to="#">Licenses</Link></li>
            <li><Link to="#">Company Information</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default UpperFooter
