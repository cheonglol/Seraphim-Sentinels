import React, { useState } from 'react'
import { Dialog } from 'primereact/dialog'
import { Button } from 'primereact/button'
import { TabView, TabPanel } from 'primereact/tabview'
import { InputText } from 'primereact/inputtext'

export const LoginSignupModalButton = () => {
    const [loginModalVisible, setLoginModalVisible] = useState<boolean>(false)
    return (
        <>
            <Button label="login" onClick={() => setLoginModalVisible(true)} />
            <Dialog
                showHeader={false}
                visible={loginModalVisible}
                onHide={() => setLoginModalVisible(false)}
                className="min-h-[35vh]"
            >
                <TabView>
                    <TabPanel header="login">
                        <div className="flex flex-col gap-4">
                            <InputText
                                id="email"
                                type="email"
                                placeholder="Email"
                                className="p-2"
                            />
                            <InputText
                                id="password"
                                type="password"
                                placeholder="Password"
                                className="p-2"
                            />
                        </div>
                    </TabPanel>
                    <TabPanel header="sign up"></TabPanel>
                </TabView>
            </Dialog>
        </>
    )
}
