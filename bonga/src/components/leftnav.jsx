const Leftnav = () => {
    return (
        <div className="leftnav">
            <div className="part1">
                <h3>SHORTCUTS</h3>
                <a href="http://">News Feed</a>
                <a href="http://">Inbox</a>
                <a href="http://">My Pages</a>
                <a href="http://">Friends</a>
                <a href="http://">Images</a>
                <a href="http://">Videos</a>
                <a href="http://">Messages</a>
                <a href="http://">Notifications</a>
                <a href="http://">People Nearby</a>
                <a href="http://">Logout</a>
            </div>
            <div className="part2">
                <h3>RECENT ACTIVITIES</h3>
                <li>
                    <i>time</i>
                    <p>commented on video posted</p>
                    <p>by <span>black demaon</span></p>
                </li>
                <li>
                    <i>time</i>
                    <p>commented on video posted</p>
                    <p>by <span>black demaon</span></p>
                </li>
                <li>
                    <i>time</i>
                    <p>commented on video posted</p>
                    <p>by <span>black demaon</span></p>
                </li>
            </div>
            <div className="part3">
                <h3>WHO'S FOLLOWING</h3>
                <div className="follower">
                    <div className="folowerimage"><img src="" alt="phot" srcset="" /></div>
                    <div className="followername">Kelly bill</div>
                    <div className="addfriend"><button>Add Friend</button></div>
                </div>
                <div className="follower">
                    <div className="folowerimage"><img src="" alt="phot" srcset="" /></div>
                    <div className="followername">Kelly bill</div>
                    <div className="addfriend"><button>Add Friend</button></div>
                </div>
                <div className="follower">
                    <div className="folowerimage"><img src="" alt="phot" srcset="" /></div>
                    <div className="followername">Kelly bill</div>
                    <div className="addfriend"><button>Add Friend</button></div>
                </div>
                <div className="follower">
                    <div className="folowerimage"><img src="" alt="phot" srcset="" /></div>
                    <div className="followername">Kelly bill</div>
                    <div className="addfriend"><button>Add Friend</button></div>
                </div>
            </div>
        </div>

    );
}

export default Leftnav;