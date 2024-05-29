import { Author } from "./BlogPost";
import { FaUserCircle, FaInstagram, FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";
import IconRender from "../components/IconRender";
import { Link } from "react-router-dom";

type AuthorDetailsProps = {
    author: Author | undefined
};

const AuthorDetails = ({ author }: AuthorDetailsProps) => {
    return (
        <div className="bg-slate-100 p-9 dark:bg-slate-800 rounded-lg mt-4">
            <div className="flex justify-center items-center w-1/3 mx-auto">
                <div className="w-14 h-14 mr-2">
                    {author?.profile ? (
                        <img className="mr-2" src={author.profile} alt="Author Profile" />
                    ) : (
                        <FaUserCircle className="w-7 h-7 mr-2" />
                    )}
                </div>
                <div>
                    <p className="font-semibold text-slate-800 dark:text-slate-200">{author?.name}</p>
                    <p className="text-slate-600 dark:text-slate-400">{author?.role}</p>
                </div>
            </div>
            <div className="w-3/4 mx-auto text-center p-2 mt-3 text-slate-600 dark:text-slate-400">
                {author?.about_me}
            </div>

            <div className="flex justify-evenly items-center w-1/5 mt-4 mx-auto">
                <Link to={`${author?.linkedin}`}>
                    <IconRender Icon={FaFacebook} />
                </Link>
                <Link to={`${author?.twitter}`}>
                    <IconRender Icon={FaTwitter} />
                </Link>
                <Link to={`${author?.instagram}`}>
                    <IconRender Icon={FaInstagram} />
                </Link>
                <Link to={`${author?.youtube}`}>
                    <IconRender Icon={FaYoutube} />
                </Link>
            </div>
        </div>
    );
};

export default AuthorDetails;