import { Button, FormControl, FormGroup, Typography } from '@material-ui/core'
import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import TwitterIcon from '@material-ui/icons/Twitter';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { TextField } from '@material-ui/core';
import { ModalBlock } from '../../components/ModalBlock';
import { useStylesSignIn } from './theme';

function SignIn() {
    const classes = useStylesSignIn();

    const [visibleModal, setVisibleModal] = React.useState<'signIn' | 'signUp'>();

    const handleClickOpenSignIn = (): void => {
        setVisibleModal('signIn');
    };

    const handleClickOpenSignUp = (): void => {
        setVisibleModal('signUp');
    };

    const handleCloseModal = (): void => {
        setVisibleModal(undefined);
    };


    return (
        <div className={classes.wrapper}>
            <section className={classes.blueSide}>
            <TwitterIcon color='primary' className={classes.blueSideBigIcon}/>
                <ul className={classes.blueSideListInfo}>
                    <li className={classes.blueSideListInfoItem}><Typography variant='h6'>
                        <SearchIcon className={classes.blueSideListInfoIcon}/>
                        Читайте о том, что вам интересно</Typography></li>
                    <li className={classes.blueSideListInfoItem}><Typography variant='h6'>
                        <PeopleOutlineIcon className={classes.blueSideListInfoIcon}/>
                        Узнайте, о чем говорят в мире</Typography>
                    </li>
                    <li className={classes.blueSideListInfoItem}><Typography variant='h6'>
                        <ChatBubbleOutlineIcon className={classes.blueSideListInfoIcon}/>
                        Присоединяйтесь к общению</Typography>
                    </li>
                </ul>
            </section>
            <section className={classes.loginSide}>
                <div className={classes.loginSideWrapper}>
                    <TwitterIcon color='primary' className={classes.loginSideTwitterIcon}/>
                    <Typography gutterBottom className={classes.loginSideTitle} variant='h4'>Узнайте, что происходит в мире прямо сейчас</Typography>
                    <Typography>
                        <b>Присоединяйтесь к Твиттеру прямо сейчас!</b>
                    </Typography>
                    <br/>
                    <Button 
                    onClick={handleClickOpenSignUp}
                    style={{ marginBottom: 20 }}
                    variant="contained"
                    color="primary"
                    fullWidth>
                        Зарегистрироваться
                    </Button>
                    <Button onClick={handleClickOpenSignIn} variant='outlined' color='primary' fullWidth>Войти</Button>
                    <ModalBlock
            visible={visibleModal === 'signIn'}
            onClose={handleCloseModal}
            classes={classes}
            title="Войти в аккаунт">
            <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
              <FormGroup aria-label="position" row>
                <TextField
                  className={classes.loginSideField}
                  autoFocus
                  id="email"
                  label="E-Mail"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="email"
                  fullWidth
                />
                <TextField
                  className={classes.loginSideField}
                  autoFocus
                  id="password"
                  label="Пароль"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="password"
                  fullWidth
                />
                <Button onClick={handleCloseModal} variant="contained" color="primary" fullWidth>
                  Войти
                </Button>
              </FormGroup>
            </FormControl>
          </ModalBlock>
          <ModalBlock
            visible={visibleModal === 'signUp'}
            onClose={handleCloseModal}
            classes={classes}
            title="Создайте учетную запись">
            <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
              <FormGroup aria-label="position" row>
                <TextField
                  className={classes.registerField}
                  autoFocus
                  id="name"
                  label="Имя"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="name"
                  fullWidth
                />
                <TextField
                  className={classes.registerField}
                  autoFocus
                  id="email"
                  label="E-Mail"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="email"
                  fullWidth
                />
                <TextField
                  className={classes.registerField}
                  autoFocus
                  id="password"
                  label="Пароль"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="password"
                  fullWidth
                />
                <Button variant="contained" color="primary" fullWidth>
                  Далее
                </Button>
              </FormGroup>
            </FormControl>
          </ModalBlock>

                </div>
            </section>
        </div>
    )
}

export default SignIn
