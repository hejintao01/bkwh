<template>
    <div>
        <div class="dd">
            <!-- 头部搜索 -->
            <div class="search">
                <span>搜索</span>
            </div>
            <!-- 搜索框 -->
            <div class="ll">
                <input type="text"  class="ser" placeholder="输入关键字搜索" />
                <!-- <button type="button" class="submit">搜索</button> -->
            </div>
        </div>
        <div class="nav">
            <nav>
                <ul>
                    <li>
                          <a href="/" title="热榜">热榜</a>
                          </li>
                    <li>
                          <a href="/" title="C/C++">C/C++</a>
                    </li>
                    <li>
                          <a href="/" title="JAVA">JAVA</a>
                    </li>
                    <li>
                        <a href="/" title="JavaScript">JavaScript</a>
                    </li>
                    <li>
                        <a href="/" title="PHP">PHP</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
export default ({
    name:"Head"
})
</script>


<style>
    @import url('../assets/css/headvue.css');
</style>
