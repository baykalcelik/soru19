import './post.css';
import UserBadge from './UserBadge';
import UserName from './UserName';
import {useState} from 'react';

import PostCommentLink from './PostCommentLink';

            let favoritepost= <svg color="currentColor" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon></svg>

            let favoritepostClicked= <svg color="black" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="black" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon></svg>


            let like = <svg color="currentColor" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg>
            
            let like2 = <svg width="24" height="24" version="1.1" viewBox="100 100 500 300" xmlns="http://www.w3.org/2000/svg">
            <path d="m350.31 493.43c-0.21094 0.003906-0.42188 0.003906-0.63281 0-2.418 0-4.8672-0.72266-6.9961-2.2344-6.7148-4.7656-165.21-117.81-223.61-213.18-0.078125-0.12891-0.15234-0.25781-0.23047-0.38672-13.031-21.617-19.918-46.434-19.918-71.809 0-76.789 62.473-139.26 139.26-139.26 44.457 0 85.742 21.125 111.8 56.207 26.062-35.086 67.352-56.207 111.8-56.207 76.789 0 139.26 62.473 139.26 139.26 0 25.375-6.8867 50.191-19.918 71.809-0.074219 0.12891-0.14453 0.25781-0.23047 0.38672-58.391 95.363-216.89 208.41-223.61 213.18-2.1133 1.5117-4.5625 2.2344-6.9883 2.2344z" fill="red"/>
           </svg>






            let comment = <svg color="currentColor" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg>


            let comment2 = <svg color="currentColor" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg>



            let inbox = <svg color="currentColor" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon></svg>



            let happyface = <svg color="currentColor" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path></svg>



            let like3 = <svg color="currentColor" fill="currentColor" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>




            let inbox3 = <svg color="currentColor" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M22.91 2.388a.69.69 0 00-.597-.347l-20.625.002a.687.687 0 00-.482 1.178L7.26 9.16a.686.686 0 00.778.128l7.612-3.657a.723.723 0 01.937.248.688.688 0 01-.225.932l-7.144 4.52a.69.69 0 00-.3.743l2.102 8.692a.687.687 0 00.566.518.655.655 0 00.103.008.686.686 0 00.59-.337L22.903 3.08a.688.688 0 00.007-.692" fillRule="evenodd"></path></svg>



export default function Post(){


    const [pcarduser, sePcCarduser] = useState({badgeText:"Hamburg, Germany", uname:"Effective Lifes", src:"https://picsum.photos/id/25/100/100",yatayaragenis:false, ufsize:"small",bordered:true, ubklaslar:"badgeCover badgeCoveryatay", infogoster:true, unklaslar:"unTextextraBold unfontBuyuk unfontAile", biklaslar:"badgeinfotext bilightyazi bipunto12 bigriyazi ", unamesize:"full"});



    return(
        <div id="postCover">
                <div className="postHeaderArea">
                    <div className="postUserData">

                        <UserBadge ubklaslar={pcarduser.ubklaslar} src={pcarduser.src}   ufsize={pcarduser.ufsize} bordered={pcarduser.bordered}  yatayaragenis={pcarduser.yatayaragenis} uname={pcarduser.uname} badgeText={pcarduser.badgeText}  infogoster={pcarduser.infogoster} unklaslar={pcarduser.unklaslar} biklaslar={pcarduser.biklaslar} unamesize={pcarduser.unamesize} />

                    </div>

                        <button className='postUserOptions'>
                            <svg width="35" height="35" version="1.1" viewBox="-50 -100 700 700" xmlns="http://www.w3.org/2000/svg">
                            <g>
                            <path d="m175 280c0 19.328 15.672 35 35 35s35-15.672 35-35-15.672-35-35-35-35 15.672-35 35z"/>
                            <path d="m350 315c-19.328 0-35-15.672-35-35s15.672-35 35-35 35 15.672 35 35-15.672 35-35 35z"/>
                            <path d="m490 315c-19.328 0-35-15.672-35-35s15.672-35 35-35 35 15.672 35 35-15.672 35-35 35z"/>
                            </g>
                            </svg>
                        </button>
                    
                </div>




                <div className="postContentimage">
                    <img src="https://picsum.photos/id/34/500/500" className='postContentMedia' alt="post content media"/>
                </div>
                
                
                <div className="postContent">
                    <div className="postContentIcons">
                        <div className='postCIL'>
                            <PostCommentLink svg1={like} svg2={like2} />
                            <PostCommentLink svg1={comment} svg2={comment}/>
                            <PostCommentLink svg1={inbox} svg2={inbox}/>
                        </div>
                        
                        <PostCommentLink svg1={favoritepost} svg2={favoritepostClicked} />
                    {/* {like2}
                    {comment}
                    {inbox2}

                    {favoritepost} */}

                    </div>
                    <p className="postLikeCount">.... likes</p>
                    <div className='firstCommentDiv'>
                        {/* <span className='postUserNameLink'>"user name link</span> */}

                        <UserName uname="Effective Lifes" unklaslar="unTextextraBold unfontBuyuk unfontAile" unamesize="full"/>

                        <span className='firstComment'>first comment is my first comment but i didn't write it intentionally</span>
                        <p className='viewAllComments'>View All ... Comments</p>
                    </div>
                    <p className='whenposted'>3 DAYS AGO</p>
                </div>



                <div className='postFooter'>
                    {/* {happyface} */}
                    <PostCommentLink svg1={happyface} svg2={happyface}/>
                    <input className='comment_input' type="text" placeholder="Add a comment..."/>
                    <button className='send_post_button'>Post</button>
                </div>



        </div>
    )
}