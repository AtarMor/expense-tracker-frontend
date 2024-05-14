import { useState } from 'react'
import { userService } from '../services/user.service.js'

export function LoginSignup({ user, setUser }) {
    const [credentials, setCredentials] = useState(userService.getEmptyCredentials())
    const [isSignupState, setIsSignupState] = useState(false)

    async function onLogout() {
        try {
            await userService.logout()
            setUser(null)
        } catch (err) {
            console.log('Failed to log out', err)
        }
    }

    function handleCredentialsChange({ target }) {
        const { name: field, value } = target
        setCredentials(prevCreds => ({ ...prevCreds, [field]: value }))
    }

    async function onSubmit(ev) {
        ev.preventDefault()
        const method = isSignupState ? userService.signup : userService.login
        try {
            const user = await method(credentials)
            setUser(user)
        } catch (err) {
            console.error('Oops try again', err)
        }
    }

    function onToggleSignupState() {
        setIsSignupState(!isSignupState)
    }

    const { username, password, fullName } = credentials
    return (<>
        {user &&
            <div className='welcome-user'>
                <img className="user-img" src={user.imgUrl ? user.imgUrl : '/assets/img/user-avatar.svg'} alt="user-img" />
                <h2 className="user-name">Hello {user.fullName}</h2>
                <button className="logout-btn" onClick={onLogout}>Log out</button>
            </div>}

        {!user && <div className="login-signup">
            {isSignupState ? <h3>Sign up</h3> : <h3>Log in</h3>}

            <form className="login-form" onSubmit={onSubmit}>
                <input
                    type="text"
                    name="username"
                    value={username}
                    placeholder="Username"
                    onChange={handleCredentialsChange}
                    required
                    autoFocus
                />

                <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Password"
                    onChange={handleCredentialsChange}
                    required
                />

                {isSignupState && <input
                    type="text"
                    name="fullName"
                    value={fullName}
                    placeholder="Full name"
                    onChange={handleCredentialsChange}
                    required
                />}

                <button className='signup-btn'>{isSignupState ? 'Sign up' : 'Log in'}</button>
            </form>

            <div className="toggle-signup">
                <a href="#" onClick={onToggleSignupState}>
                    {isSignupState ? <>Already a member? <span>Log in</span></> : <>Don't have an account? <span>Sign Up</span></>}
                </a >
            </div>
        </div >}
    </>
    )
}

