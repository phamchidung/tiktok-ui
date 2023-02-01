import MainVideo from '~/layouts/components/MainVideo';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <MainVideo
                data={{
                    full_name: 'Chí Dũng',
                    nickname: 'chidung',
                    title_video:
                        'Pháo hoa lên các vì sao Mọi điều ước đều thành hiện thực #fyp #foryou #fypシ #happynewyear',
                    music_name: 'Tùng Seven 1999',
                    video_url:
                        'https://v16-webapp.tiktok.com/f3bdf6548bbfcf38e73027e1f3d7432b/63dad20a/video/tos/useast2a/tos-useast2a-pve-0037-aiso/oMGRgbK8nDfjeSpCTYDdHWQW2BPo9kMQODVbVA/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=3298&bt=1649&cs=0&ds=3&ft=hatGN2BHjVQ9wY84mDhd.-AUkX4gTsU9pnnOO4YqEeC&mime_type=video_mp4&qs=0&rc=ZzplZ2hkaDw4aTdoOzlpZ0BpMzhsaTo6Zm46aTMzZjgzM0AvYzUvLTExXzAxY2I1NmAyYSM2YGZjcjRvXmBgLS1kL2Nzcw%3D%3D&l=20230201145624D2B51C34B8EFCD0553CC&btag=80000',
                    like_count: '910.4K',
                    comment_count: '6619',
                    share_count: '19.1K',
                }}
            />
            <MainVideo
                data={{
                    full_name: 'Chí Dũng',
                    nickname: 'chidung',
                    title_video: 'Ly hôn…',
                    music_name: 'Chun Pop',
                    video_url:
                        'https://v16-webapp.tiktok.com/f3bdf6548bbfcf38e73027e1f3d7432b/63dad20a/video/tos/useast2a/tos-useast2a-pve-0037-aiso/oMGRgbK8nDfjeSpCTYDdHWQW2BPo9kMQODVbVA/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=3298&bt=1649&cs=0&ds=3&ft=hatGN2BHjVQ9wY84mDhd.-AUkX4gTsU9pnnOO4YqEeC&mime_type=video_mp4&qs=0&rc=ZzplZ2hkaDw4aTdoOzlpZ0BpMzhsaTo6Zm46aTMzZjgzM0AvYzUvLTExXzAxY2I1NmAyYSM2YGZjcjRvXmBgLS1kL2Nzcw%3D%3D&l=20230201145624D2B51C34B8EFCD0553CC&btag=80000',
                    like_count: '129.4K',
                    comment_count: '619',
                    share_count: '14.1K',
                }}
            />
            <MainVideo
                data={{
                    full_name: 'pets_2210',
                    nickname: 'cutepet',
                    title_video: 'Hun d. ữ quá đi hà ☺#catsoftiktok #cat #kitty #xuhuong',
                    music_name: 'Người viết tình ca',
                    video_url:
                        'https://v16-webapp.tiktok.com/f3bdf6548bbfcf38e73027e1f3d7432b/63dad20a/video/tos/useast2a/tos-useast2a-pve-0037-aiso/oMGRgbK8nDfjeSpCTYDdHWQW2BPo9kMQODVbVA/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=3298&bt=1649&cs=0&ds=3&ft=hatGN2BHjVQ9wY84mDhd.-AUkX4gTsU9pnnOO4YqEeC&mime_type=video_mp4&qs=0&rc=ZzplZ2hkaDw4aTdoOzlpZ0BpMzhsaTo6Zm46aTMzZjgzM0AvYzUvLTExXzAxY2I1NmAyYSM2YGZjcjRvXmBgLS1kL2Nzcw%3D%3D&l=20230201145624D2B51C34B8EFCD0553CC&btag=80000',
                    like_count: '529.4K',
                    comment_count: '3619',
                    share_count: '24.1K',
                }}
            />
        </div>
    );
}

export default Home;
