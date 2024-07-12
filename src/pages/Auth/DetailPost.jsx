import AuthLayout from "../../components/Partials/AuthLayout"
import { VscPreview  } from "react-icons/vsc";
import { useState,useEffect  } from "react";
import {getSinglepost} from "../../services/post.service";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import FormEdit from "./FormEdit";
import { useParams } from "react-router-dom";
import PreviewPost from "./PreviewPost";
const DetailPost = () => {
    const { id } = useParams();
    const Api = useAxiosPrivate()
    const [activeTab, setActiveTab] = useState('show');
    const [post,setPost] = useState([]);
    const HintAPI = async() => {
const result = await getSinglepost({Api,id})
setPost(result)
// console.log(result)
    }
    useEffect(()=>{
HintAPI()
    },[id])
    const renderTab = () => {
        switch (activeTab) {
            case 'setting':
                return <FormEdit {...{data:post}}/>
            case 'show':
                return <PreviewPost {...{title:post.title,category:post.category,date:post.created_at,thumbnail:post.thumbnail,id:post.id,body:post.body,author:post.author}}/>;
            default:
                return null;
        }
    };
    
    return (
        <>
      
            <AuthLayout>
                <div>
                    <div className="sm:hidden">
                        <label htmlFor="Tab" className="sr-only">Tab</label>
                        <select
                            id="Tab"
                            className="w-full rounded-md border-gray-200"
                            value={activeTab}
                            onChange={(e) => setActiveTab(e.target.value)}
                        >
                            <option value="setting">Settings</option>
                            <option value="show">Show</option>
                        </select>
                    </div>

                    <div className="hidden sm:block">
                        <div className="border-b border-gray-200">
                            <nav className="-mb-px flex gap-6" aria-label="Tabs">
                                <button
                                    onClick={() => setActiveTab('setting')}
                                    className={`inline-flex shrink-0 items-center gap-2 border-b-2 px-1 pb-4 text-sm font-medium ${
                                        activeTab === 'setting' ? 'border-teal-500 text-teal-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                                    }`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                    Settings
                                </button>

                                <button
                                    onClick={() => setActiveTab('show')}
                                    className={`inline-flex shrink-0 items-center gap-2 border-b-2 px-1 pb-4 text-sm font-medium ${
                                        activeTab === 'show' ? 'border-teal-500 text-teal-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                                    }`}
                                    aria-current="page"
                                >
                                    <VscPreview />
                                    Show
                                </button>
                            </nav>
                        </div>
                    </div>
                </div>
                {renderTab()}
            </AuthLayout>
        </>
    );
};

export default DetailPost;
