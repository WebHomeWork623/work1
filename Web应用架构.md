Web应用架构
======
在正式的实现之前，更重要的是对代码进行宏观上的架构设计。<br>这样一来可以方便今后的更新版本，二来可以解耦来降低合作成本。<br>
###Web前端系统
![](http://img.blog.csdn.net/20140510171955375?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvZGluZ2xhbmdfMjAwOQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
<br>为了达到不同应用的服务器共享、避免单点故障、集中管理、统一配置等目的，不以应用划分服务器，而是将所有服务器做统一使用，每台服务器都可以对多个应用提供服务，当某些应用访问量升高时，通过增加服务器节点达到整个服务器集群的性能提高，同时使他应用也会受益。该Web前端系统基于Apache/Lighttpd/Eginx等的虚拟主机平台，提供Java程序运行环境。服务器对开发人员是透明的，不需要开发人员介入服务器管理
###负载均衡系统
![](http://img.blog.csdn.net/20140510172018390?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvZGluZ2xhbmdfMjAwOQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
<br>负载均衡系统分为硬件和软件两种。硬件负载均衡效率高，但是价格贵，比如F5等。软件负载均衡系统价格较低或者免费，效率较硬件负载均衡系统低，不过对于流量一般或稍大些网站来讲也足够使用，比如lvs, nginx。大多数网站都是硬件、软件负载均衡系统并用。
###数据库集群系统
![](http://img.blog.csdn.net/20140510172038218?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvZGluZ2xhbmdfMjAwOQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
<br>使用 MySQL 数据库，考虑到Web应用的数据库读多写少的特点，我们主要对读数据库做了优化，提供专用的读数据库和写数据库，在应用程序中实现读操作和写操作分别访问不同的数据库。使用 MySQL Replication 机制实现快速将主库（写库）的数据库复制到从库（读库）。一个主库对应多个从库，主库数据实时同步到从库。写数据库有多台，每台都可以提供多个应用共同使用，这样可以解决写库的性能瓶颈问题和单点故障问题。读数据库有多台，通过负载均衡设备实现负载均衡，从而达到读数据库的高性能、高可靠和高可扩展性。数据库服务器和应用服务器分离。从数据库使用BigIP做负载均衡。
###缓存系统
![](http://img.blog.csdn.net/20140510172056171?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvZGluZ2xhbmdfMjAwOQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
<br>缓存分为文件缓存、内存缓存、数据库缓存。在大型Web应用中使用最多且效率最高的是内存缓存。最常用的内存缓存工具是Memcached。
###分布式存储系统
![](http://img.blog.csdn.net/20140510172110640?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvZGluZ2xhbmdfMjAwOQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
<br>Lustre是HP,Intel,Cluster File System公司联合美国能源部开发的Linux集群并行文件系统.该系统目前推出1.0的发布版本,是第一个基于对象存储设备的,开源的并行文件系统。Lustre名称来源于Linux和Clusters，是一个新颖的存储和文件架构，并实现在大集群上。Lustre是开源软件，遵从GPL。其设计目标是下一代集群文件系统，该系统可以支持10000个节点，PB量级存储，以及数百GBps的传输速率（with state of the art security and management infrastructure）。Lustre的1.0版目标是最大1000个节点，存储量100TB。
###分布式服务器管理系统
![](http://img.blog.csdn.net/20140510172123078?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvZGluZ2xhbmdfMjAwOQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
<br>在分布式服务器管理系统软件中有一些比较优秀的软件，其中比较理想的一个是Cfengine。它可以对服务器进行分组，不同的分组可以分别定制系统配置文件、计划任务等配置。它是基于C/S 结构的，所有的服务器配置和管理脚本程序都保存在Cfengine Server上，而被管理的服务器运行着 Cfengine Client 程序，Cfengine Client通过SSL加密的连接定期的向服务器端发送请求以获取最新的配置文件和管理命令、脚本程序、补丁安装等任务。
