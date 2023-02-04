import MainVideo from '~/layouts/components/MainVideo';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Home() {
    const [currentPlayingVideoId, setCurrentPlayingVideoId] = useState(1);

    const handleChangePlayingVideo = (videoId) => {
        setCurrentPlayingVideoId(videoId);
    };

    return (
        <div className={cx('wrapper')}>
            <MainVideo
                data={{
                    video_id: 1,
                    full_name: 'Chí Dũng',
                    nickname: 'chidung',
                    title_video:
                        'Pháo hoa lên các vì sao Mọi điều ước đều thành hiện thực #fyp #foryou #fypシ #happynewyear',
                    music_name: 'Tùng Seven 1999',
                    video_url:
                        'https://v16-webapp.tiktok.com/69aa87fa2a8c3d077d65b9d94f88d9d6/63dea7eb/video/tos/useast2a/tos-useast2a-pve-0037-aiso/oczndWNwQM1oxfGBCxJAAKndh7UhJIGoKBLNHH/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=4412&bt=2206&cs=0&ds=3&ft=4b~OyM3a8Zmo0g7Vi64jVt.UPpWrKsdm&mime_type=video_mp4&qs=0&rc=PDRkaTw7ZjpkOmdlZzdnNkBpam9qazw6ZjhraTMzZjgzM0BeNjU1NC9iXy0xYDItLS4xYSNiMGVncjQwZGJgLS1kL2Nzcw%3D%3D&l=202302041245370826EC605CC1D4505816&btag=800000',
                    like_count: '910.4K',
                    comment_count: '6619',
                    share_count: '19.1K',
                }}
                handleChangePlayingVideo={handleChangePlayingVideo}
                currentPlayingVideoId={currentPlayingVideoId}
            />
            <MainVideo
                data={{
                    video_id: 2,
                    full_name: 'Chí Dũng',
                    nickname: 'chidung',
                    title_video: 'Ly hôn…',
                    music_name: 'Chun Pop',
                    video_url:
                        'https://v16-webapp.tiktok.com/69aa87fa2a8c3d077d65b9d94f88d9d6/63dea7eb/video/tos/useast2a/tos-useast2a-pve-0037-aiso/oczndWNwQM1oxfGBCxJAAKndh7UhJIGoKBLNHH/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=4412&bt=2206&cs=0&ds=3&ft=4b~OyM3a8Zmo0g7Vi64jVt.UPpWrKsdm&mime_type=video_mp4&qs=0&rc=PDRkaTw7ZjpkOmdlZzdnNkBpam9qazw6ZjhraTMzZjgzM0BeNjU1NC9iXy0xYDItLS4xYSNiMGVncjQwZGJgLS1kL2Nzcw%3D%3D&l=202302041245370826EC605CC1D4505816&btag=800000',
                    like_count: '129.4K',
                    comment_count: '619',
                    share_count: '14.1K',
                }}
                handleChangePlayingVideo={handleChangePlayingVideo}
                currentPlayingVideoId={currentPlayingVideoId}
            />
            <MainVideo
                data={{
                    video_id: 3,
                    full_name: 'pets_2210',
                    nickname: 'cutepet',
                    title_video: 'Hun d. ữ quá đi hà ☺#catsoftiktok #cat #kitty #xuhuong',
                    music_name: 'Người viết tình ca',
                    video_url:
                        'https://v16-webapp.tiktok.com/69aa87fa2a8c3d077d65b9d94f88d9d6/63dea7eb/video/tos/useast2a/tos-useast2a-pve-0037-aiso/oczndWNwQM1oxfGBCxJAAKndh7UhJIGoKBLNHH/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=4412&bt=2206&cs=0&ds=3&ft=4b~OyM3a8Zmo0g7Vi64jVt.UPpWrKsdm&mime_type=video_mp4&qs=0&rc=PDRkaTw7ZjpkOmdlZzdnNkBpam9qazw6ZjhraTMzZjgzM0BeNjU1NC9iXy0xYDItLS4xYSNiMGVncjQwZGJgLS1kL2Nzcw%3D%3D&l=202302041245370826EC605CC1D4505816&btag=800000',
                    like_count: '529.4K',
                    comment_count: '3619',
                    share_count: '24.1K',
                }}
                handleChangePlayingVideo={handleChangePlayingVideo}
                currentPlayingVideoId={currentPlayingVideoId}
            />
        </div>
    );
}

export default Home;
