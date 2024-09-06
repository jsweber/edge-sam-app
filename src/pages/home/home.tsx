import { useNavigate } from 'react-router-dom';
import { Button } from 'sea-lion-ui';
import { useEffect } from 'react';
import styles from './home.module.less';

const Home = () => {
    

    return (
        <div className={styles.home}>
            <p>欢迎使用SeaLion cli</p>
            <div>
                <Button
                    btnType="link2"
                >
                    点击跳转至demo页
                </Button>
            </div>
        </div>
    );
};

export default Home;
