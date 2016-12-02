# react-native-push-tabbar<br/>

使用react-native-tab-navigator,push之后隐藏tabbar<br/>
<br/>
##开发中,遇见个大坑,react native在push之后怎么隐藏下方的tabbar.　
 ##  这个问题真是个大坑,按照原生的开发经验,一般项目的架构模式都是:先以tabBar作为根,tabBar之下再放置navigationBar.
 ##  但是React Native却相反.是先以navigationBar作为根,navigationBar之下再放置tabBar.这样的话push到二级界面就会自动隐藏tabBar了.该坑填完~~ <br/>
演示效果:<br/><br/>
![image](https://github.com/pheromone/react-native-push-tabbar/blob/master/%E6%BC%94%E7%A4%BA.gif) 


