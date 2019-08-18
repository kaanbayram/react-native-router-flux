import React, { Component } from 'react';
import { Scene, Router,Actions } from 'react-native-router-flux';
import Form1 from './Form1';
import Gorevlist from './Gorevlist';

export default class Router1 extends Component{
    render() {
        return(
            <Router>
                <Scene key="kimlik">
                    <Scene
                        onRight={() => Actions.gorevList() }
                        rightTitle="Görevlere Bak"
                        key="gorevOlustur" 
                        component={Form1} 
                        title="Görev Oluştur"
                    />
                    <Scene 
                        // onRight={() => Console.log("tık") }
                        key="gorevList"
                        component={Gorevlist}
                        title="Görev Listesi"
                        />
                </Scene>
            </Router>
        );
    };
};

 {/* <Scene
                    // onRight={() => Actions.studentCreate()}
                    rightTitle="Görevlere Bak"
                    key="studentsList"
                    component={StudentsList}
                    title="Ogrenci Liste"
                />
                <Scene
                    key="studentCreate"
                component={StudentCreate}
                title="Öğrenci Kaydet"
                /> */}