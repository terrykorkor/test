var fs = require('fs');
var url = require('url');
var path = require('path');
var http = require('http');

var port = 8011;

http.createServer(function(req,res){
	var uri = req.url.replace(/\?.*$/,'');
	if(uri=='/'){
		uri = '/index.html';
	}
	//console.log(__dirname+uri);
	if(fs.existsSync(__dirname+uri)){
		var ext = path.extname(url.parse(uri).pathname).toLowerCase();
		var contentType = 'application/octet-stream', encoding = null;
		if(ext in mimeTypeList){
			contentType = mimeTypeList[ext].mime;
			encoding = mimeTypeList[ext].encoding;
		}
		if(encoding!=null){encoding={encoding:encoding}}
		var file = fs.readFileSync(__dirname+uri,encoding);
		res.writeHead(200, {'Content-Type':contentType});
		res.end(file);
	}else{
		console.log(404,req.url);
		res.end();
	}
}).listen(port,function(){console.log('listening '+port+'...')});

var mimeTypeList = {
".3dm":{"mime":"x-world/x-3dmf","encoding":null},
".3dmf":{"mime":"x-world/x-3dmf","encoding":null},
".a":{"mime":"application/octet-stream","encoding":null},
".aab":{"mime":"application/x-authorware-bin","encoding":null},
".aam":{"mime":"application/x-authorware-map","encoding":null},
".aas":{"mime":"application/x-authorware-seg","encoding":null},
".abc":{"mime":"text/vnd.abc","encoding":null},
".acgi":{"mime":"text/html","encoding":null},
".afl":{"mime":"video/animaflex","encoding":null},
".ai":{"mime":"application/postscript","encoding":null},
".aif":{"mime":"audio/aiff","encoding":null},
".aif":{"mime":"audio/x-aiff","encoding":null},
".aifc":{"mime":"audio/aiff","encoding":null},
".aifc":{"mime":"audio/x-aiff","encoding":null},
".aiff":{"mime":"audio/aiff","encoding":null},
".aiff":{"mime":"audio/x-aiff","encoding":null},
".aim":{"mime":"application/x-aim","encoding":null},
".aip":{"mime":"text/x-audiosoft-intra","encoding":null},
".ani":{"mime":"application/x-navi-animation","encoding":null},
".aos":{"mime":"application/x-nokia-9000-communicator-add-on-software","encoding":null},
".aps":{"mime":"application/mime","encoding":null},
".arc":{"mime":"application/octet-stream","encoding":null},
".arj":{"mime":"application/arj","encoding":null},
".arj":{"mime":"application/octet-stream","encoding":null},
".art":{"mime":"image/x-jg","encoding":null},
".asf":{"mime":"video/x-ms-asf","encoding":null},
".asm":{"mime":"text/x-asm","encoding":null},
".asp":{"mime":"text/asp","encoding":null},
".asx":{"mime":"application/x-mplayer2","encoding":null},
".asx":{"mime":"video/x-ms-asf","encoding":null},
".asx":{"mime":"video/x-ms-asf-plugin","encoding":null},
".au":{"mime":"audio/basic","encoding":null},
".au":{"mime":"audio/x-au","encoding":null},
".avi":{"mime":"application/x-troff-msvideo","encoding":null},
".avi":{"mime":"video/avi","encoding":null},
".avi":{"mime":"video/msvideo","encoding":null},
".avi":{"mime":"video/x-msvideo","encoding":null},
".avs":{"mime":"video/avs-video","encoding":null},
".bcpio":{"mime":"application/x-bcpio","encoding":null},
".bin":{"mime":"application/mac-binary","encoding":null},
".bin":{"mime":"application/macbinary","encoding":null},
".bin":{"mime":"application/octet-stream","encoding":null},
".bin":{"mime":"application/x-binary","encoding":null},
".bin":{"mime":"application/x-macbinary","encoding":null},
".bm":{"mime":"image/bmp","encoding":null},
".bmp":{"mime":"image/bmp","encoding":null},
".bmp":{"mime":"image/x-windows-bmp","encoding":null},
".boo":{"mime":"application/book","encoding":null},
".book":{"mime":"application/book","encoding":null},
".boz":{"mime":"application/x-bzip2","encoding":null},
".bsh":{"mime":"application/x-bsh","encoding":null},
".bz":{"mime":"application/x-bzip","encoding":null},
".bz2":{"mime":"application/x-bzip2","encoding":null},
".c":{"mime":"text/plain","encoding":null},
".c":{"mime":"text/x-c","encoding":null},
".c++":{"mime":"text/plain","encoding":null},
".cat":{"mime":"application/vnd.ms-pki.seccat","encoding":null},
".cc":{"mime":"text/plain","encoding":null},
".cc":{"mime":"text/x-c","encoding":null},
".ccad":{"mime":"application/clariscad","encoding":null},
".cco":{"mime":"application/x-cocoa","encoding":null},
".cdf":{"mime":"application/cdf","encoding":null},
".cdf":{"mime":"application/x-cdf","encoding":null},
".cdf":{"mime":"application/x-netcdf","encoding":null},
".cer":{"mime":"application/pkix-cert","encoding":null},
".cer":{"mime":"application/x-x509-ca-cert","encoding":null},
".cha":{"mime":"application/x-chat","encoding":null},
".chat":{"mime":"application/x-chat","encoding":null},
".class":{"mime":"application/java","encoding":null},
".class":{"mime":"application/java-byte-code","encoding":null},
".class":{"mime":"application/x-java-class","encoding":null},
".com":{"mime":"application/octet-stream","encoding":null},
".com":{"mime":"text/plain","encoding":null},
".conf":{"mime":"text/plain","encoding":null},
".cpio":{"mime":"application/x-cpio","encoding":null},
".cpp":{"mime":"text/x-c","encoding":null},
".cpt":{"mime":"application/mac-compactpro","encoding":null},
".cpt":{"mime":"application/x-compactpro","encoding":null},
".cpt":{"mime":"application/x-cpt","encoding":null},
".crl":{"mime":"application/pkcs-crl","encoding":null},
".crl":{"mime":"application/pkix-crl","encoding":null},
".crt":{"mime":"application/pkix-cert","encoding":null},
".crt":{"mime":"application/x-x509-ca-cert","encoding":null},
".crt":{"mime":"application/x-x509-user-cert","encoding":null},
".csh":{"mime":"application/x-csh","encoding":null},
".csh":{"mime":"text/x-script.csh","encoding":null},
".css":{"mime":"application/x-pointplus","encoding":"utf-8"},
".css":{"mime":"text/css","encoding":"utf-8"},
".cxx":{"mime":"text/plain","encoding":null},
".dcr":{"mime":"application/x-director","encoding":null},
".deepv":{"mime":"application/x-deepv","encoding":null},
".def":{"mime":"text/plain","encoding":null},
".der":{"mime":"application/x-x509-ca-cert","encoding":null},
".dif":{"mime":"video/x-dv","encoding":null},
".dir":{"mime":"application/x-director","encoding":null},
".dl":{"mime":"video/dl","encoding":null},
".dl":{"mime":"video/x-dl","encoding":null},
".doc":{"mime":"application/msword","encoding":null},
".dot":{"mime":"application/msword","encoding":null},
".dp":{"mime":"application/commonground","encoding":null},
".drw":{"mime":"application/drafting","encoding":null},
".dump":{"mime":"application/octet-stream","encoding":null},
".dv":{"mime":"video/x-dv","encoding":null},
".dvi":{"mime":"application/x-dvi","encoding":null},
".dwf":{"mime":"drawing/x-dwf (old)","encoding":null},
".dwf":{"mime":"model/vnd.dwf","encoding":null},
".dwg":{"mime":"application/acad","encoding":null},
".dwg":{"mime":"image/vnd.dwg","encoding":null},
".dwg":{"mime":"image/x-dwg","encoding":null},
".dxf":{"mime":"application/dxf","encoding":null},
".dxf":{"mime":"image/vnd.dwg","encoding":null},
".dxf":{"mime":"image/x-dwg","encoding":null},
".dxr":{"mime":"application/x-director","encoding":null},
".el":{"mime":"text/x-script.elisp","encoding":null},
".elc":{"mime":"application/x-bytecode.elisp (compiled elisp)","encoding":null},
".elc":{"mime":"application/x-elc","encoding":null},
".env":{"mime":"application/x-envoy","encoding":null},
".eps":{"mime":"application/postscript","encoding":null},
".es":{"mime":"application/x-esrehber","encoding":null},
".etx":{"mime":"text/x-setext","encoding":null},
".evy":{"mime":"application/envoy","encoding":null},
".evy":{"mime":"application/x-envoy","encoding":null},
".exe":{"mime":"application/octet-stream","encoding":null},
".f":{"mime":"text/plain","encoding":null},
".f":{"mime":"text/x-fortran","encoding":null},
".f77":{"mime":"text/x-fortran","encoding":null},
".f90":{"mime":"text/plain","encoding":null},
".f90":{"mime":"text/x-fortran","encoding":null},
".fdf":{"mime":"application/vnd.fdf","encoding":null},
".fif":{"mime":"application/fractals","encoding":null},
".fif":{"mime":"image/fif","encoding":null},
".fli":{"mime":"video/fli","encoding":null},
".fli":{"mime":"video/x-fli","encoding":null},
".flo":{"mime":"image/florian","encoding":null},
".flx":{"mime":"text/vnd.fmi.flexstor","encoding":null},
".fmf":{"mime":"video/x-atomic3d-feature","encoding":null},
".for":{"mime":"text/plain","encoding":null},
".for":{"mime":"text/x-fortran","encoding":null},
".fpx":{"mime":"image/vnd.fpx","encoding":null},
".fpx":{"mime":"image/vnd.net-fpx","encoding":null},
".frl":{"mime":"application/freeloader","encoding":null},
".funk":{"mime":"audio/make","encoding":null},
".g":{"mime":"text/plain","encoding":null},
".g3":{"mime":"image/g3fax","encoding":null},
".gif":{"mime":"image/gif","encoding":null},
".gl":{"mime":"video/gl","encoding":null},
".gl":{"mime":"video/x-gl","encoding":null},
".gsd":{"mime":"audio/x-gsm","encoding":null},
".gsm":{"mime":"audio/x-gsm","encoding":null},
".gsp":{"mime":"application/x-gsp","encoding":null},
".gss":{"mime":"application/x-gss","encoding":null},
".gtar":{"mime":"application/x-gtar","encoding":null},
".gz":{"mime":"application/x-compressed","encoding":null},
".gz":{"mime":"application/x-gzip","encoding":null},
".gzip":{"mime":"application/x-gzip","encoding":null},
".gzip":{"mime":"multipart/x-gzip","encoding":null},
".h":{"mime":"text/plain","encoding":null},
".h":{"mime":"text/x-h","encoding":null},
".hdf":{"mime":"application/x-hdf","encoding":null},
".help":{"mime":"application/x-helpfile","encoding":null},
".hgl":{"mime":"application/vnd.hp-hpgl","encoding":null},
".hh":{"mime":"text/plain","encoding":null},
".hh":{"mime":"text/x-h","encoding":null},
".hlb":{"mime":"text/x-script","encoding":null},
".hlp":{"mime":"application/hlp","encoding":null},
".hlp":{"mime":"application/x-helpfile","encoding":null},
".hlp":{"mime":"application/x-winhelp","encoding":null},
".hpg":{"mime":"application/vnd.hp-hpgl","encoding":null},
".hpgl":{"mime":"application/vnd.hp-hpgl","encoding":null},
".hqx":{"mime":"application/binhex","encoding":null},
".hqx":{"mime":"application/binhex4","encoding":null},
".hqx":{"mime":"application/mac-binhex","encoding":null},
".hqx":{"mime":"application/mac-binhex40","encoding":null},
".hqx":{"mime":"application/x-binhex40","encoding":null},
".hqx":{"mime":"application/x-mac-binhex40","encoding":null},
".hta":{"mime":"application/hta","encoding":null},
".htc":{"mime":"text/x-component","encoding":null},
".htm":{"mime":"text/html","encoding":"utf-8"},
".html":{"mime":"text/html","encoding":"utf-8"},
".htmls":{"mime":"text/html","encoding":"utf-8"},
".htt":{"mime":"text/webviewhtml","encoding":null},
".htx":{"mime":"text/html","encoding":null},
".ice":{"mime":"x-conference/x-cooltalk","encoding":null},
".ico":{"mime":"image/x-icon","encoding":null},
".idc":{"mime":"text/plain","encoding":null},
".ief":{"mime":"image/ief","encoding":null},
".iefs":{"mime":"image/ief","encoding":null},
".iges":{"mime":"application/iges","encoding":null},
".iges":{"mime":"model/iges","encoding":null},
".igs":{"mime":"application/iges","encoding":null},
".igs":{"mime":"model/iges","encoding":null},
".ima":{"mime":"application/x-ima","encoding":null},
".imap":{"mime":"application/x-httpd-imap","encoding":null},
".inf":{"mime":"application/inf","encoding":null},
".ins":{"mime":"application/x-internett-signup","encoding":null},
".ip":{"mime":"application/x-ip2","encoding":null},
".isu":{"mime":"video/x-isvideo","encoding":null},
".it":{"mime":"audio/it","encoding":null},
".iv":{"mime":"application/x-inventor","encoding":null},
".ivr":{"mime":"i-world/i-vrml","encoding":null},
".ivy":{"mime":"application/x-livescreen","encoding":null},
".jam":{"mime":"audio/x-jam","encoding":null},
".jav":{"mime":"text/plain","encoding":null},
".jav":{"mime":"text/x-java-source","encoding":null},
".java":{"mime":"text/plain","encoding":null},
".java":{"mime":"text/x-java-source","encoding":null},
".jcm":{"mime":"application/x-java-commerce","encoding":null},
".jfif":{"mime":"image/jpeg","encoding":null},
".jfif":{"mime":"image/pjpeg","encoding":null},
".jfif-tbnl":{"mime":"image/jpeg","encoding":null},
".jpe":{"mime":"image/jpeg","encoding":null},
".jpe":{"mime":"image/pjpeg","encoding":null},
".jpeg":{"mime":"image/jpeg","encoding":null},
".jpeg":{"mime":"image/pjpeg","encoding":null},
".jpg":{"mime":"image/jpeg","encoding":null},
".jpg":{"mime":"image/pjpeg","encoding":null},
".jps":{"mime":"image/x-jps","encoding":null},
".js":{"mime":"application/x-javascript","encoding":"utf-8"},
".js":{"mime":"application/javascript","encoding":"utf-8"},
".js":{"mime":"application/ecmascript","encoding":"utf-8"},
".js":{"mime":"text/javascript","encoding":"utf-8"},
".js":{"mime":"text/ecmascript","encoding":"utf-8"},
".json":{"mime":"application/json","encoding":"utf-8"},
".jut":{"mime":"image/jutvision","encoding":null},
".kar":{"mime":"audio/midi","encoding":null},
".kar":{"mime":"music/x-karaoke","encoding":null},
".ksh":{"mime":"application/x-ksh","encoding":null},
".ksh":{"mime":"text/x-script.ksh","encoding":null},
".la":{"mime":"audio/nspaudio","encoding":null},
".la":{"mime":"audio/x-nspaudio","encoding":null},
".lam":{"mime":"audio/x-liveaudio","encoding":null},
".latex":{"mime":"application/x-latex","encoding":null},
".lha":{"mime":"application/lha","encoding":null},
".lha":{"mime":"application/octet-stream","encoding":null},
".lha":{"mime":"application/x-lha","encoding":null},
".lhx":{"mime":"application/octet-stream","encoding":null},
".list":{"mime":"text/plain","encoding":null},
".lma":{"mime":"audio/nspaudio","encoding":null},
".lma":{"mime":"audio/x-nspaudio","encoding":null},
".log":{"mime":"text/plain","encoding":null},
".lsp":{"mime":"application/x-lisp","encoding":null},
".lsp":{"mime":"text/x-script.lisp","encoding":null},
".lst":{"mime":"text/plain","encoding":null},
".lsx":{"mime":"text/x-la-asf","encoding":null},
".ltx":{"mime":"application/x-latex","encoding":null},
".lzh":{"mime":"application/octet-stream","encoding":null},
".lzh":{"mime":"application/x-lzh","encoding":null},
".lzx":{"mime":"application/lzx","encoding":null},
".lzx":{"mime":"application/octet-stream","encoding":null},
".lzx":{"mime":"application/x-lzx","encoding":null},
".m":{"mime":"text/plain","encoding":null},
".m":{"mime":"text/x-m","encoding":null},
".m1v":{"mime":"video/mpeg","encoding":null},
".m2a":{"mime":"audio/mpeg","encoding":null},
".m2v":{"mime":"video/mpeg","encoding":null},
".m3u":{"mime":"audio/x-mpequrl","encoding":null},
".man":{"mime":"application/x-troff-man","encoding":null},
".map":{"mime":"application/x-navimap","encoding":null},
".mar":{"mime":"text/plain","encoding":null},
".mbd":{"mime":"application/mbedlet","encoding":null},
".mc$":{"mime":"application/x-magic-cap-package-1.0","encoding":null},
".mcd":{"mime":"application/mcad","encoding":null},
".mcd":{"mime":"application/x-mathcad","encoding":null},
".mcf":{"mime":"image/vasa","encoding":null},
".mcf":{"mime":"text/mcf","encoding":null},
".mcp":{"mime":"application/netmc","encoding":null},
".me":{"mime":"application/x-troff-me","encoding":null},
".mht":{"mime":"message/rfc822","encoding":null},
".mhtml":{"mime":"message/rfc822","encoding":null},
".mid":{"mime":"application/x-midi","encoding":null},
".mid":{"mime":"audio/midi","encoding":null},
".mid":{"mime":"audio/x-mid","encoding":null},
".mid":{"mime":"audio/x-midi","encoding":null},
".mid":{"mime":"music/crescendo","encoding":null},
".mid":{"mime":"x-music/x-midi","encoding":null},
".midi":{"mime":"application/x-midi","encoding":null},
".midi":{"mime":"audio/midi","encoding":null},
".midi":{"mime":"audio/x-mid","encoding":null},
".midi":{"mime":"audio/x-midi","encoding":null},
".midi":{"mime":"music/crescendo","encoding":null},
".midi":{"mime":"x-music/x-midi","encoding":null},
".mif":{"mime":"application/x-frame","encoding":null},
".mif":{"mime":"application/x-mif","encoding":null},
".mime":{"mime":"message/rfc822","encoding":null},
".mime":{"mime":"www/mime","encoding":null},
".mjf":{"mime":"audio/x-vnd.audioexplosion.mjuicemediafile","encoding":null},
".mjpg":{"mime":"video/x-motion-jpeg","encoding":null},
".mm":{"mime":"application/base64","encoding":null},
".mm":{"mime":"application/x-meme","encoding":null},
".mme":{"mime":"application/base64","encoding":null},
".mod":{"mime":"audio/mod","encoding":null},
".mod":{"mime":"audio/x-mod","encoding":null},
".moov":{"mime":"video/quicktime","encoding":null},
".mov":{"mime":"video/quicktime","encoding":null},
".movie":{"mime":"video/x-sgi-movie","encoding":null},
".mp2":{"mime":"audio/mpeg","encoding":null},
".mp2":{"mime":"audio/x-mpeg","encoding":null},
".mp2":{"mime":"video/mpeg","encoding":null},
".mp2":{"mime":"video/x-mpeg","encoding":null},
".mp2":{"mime":"video/x-mpeq2a","encoding":null},
".mp3":{"mime":"audio/mpeg3","encoding":null},
".mp3":{"mime":"audio/x-mpeg-3","encoding":null},
".mp3":{"mime":"video/mpeg","encoding":null},
".mp3":{"mime":"video/x-mpeg","encoding":null},
".mpa":{"mime":"audio/mpeg","encoding":null},
".mpa":{"mime":"video/mpeg","encoding":null},
".mpc":{"mime":"application/x-project","encoding":null},
".mpe":{"mime":"video/mpeg","encoding":null},
".mpeg":{"mime":"video/mpeg","encoding":null},
".mpg":{"mime":"audio/mpeg","encoding":null},
".mpg":{"mime":"video/mpeg","encoding":null},
".mpga":{"mime":"audio/mpeg","encoding":null},
".mpp":{"mime":"application/vnd.ms-project","encoding":null},
".mpt":{"mime":"application/x-project","encoding":null},
".mpv":{"mime":"application/x-project","encoding":null},
".mpx":{"mime":"application/x-project","encoding":null},
".mrc":{"mime":"application/marc","encoding":null},
".ms":{"mime":"application/x-troff-ms","encoding":null},
".mv":{"mime":"video/x-sgi-movie","encoding":null},
".my":{"mime":"audio/make","encoding":null},
".mzz":{"mime":"application/x-vnd.audioexplosion.mzz","encoding":null},
".nap":{"mime":"image/naplps","encoding":null},
".naplps":{"mime":"image/naplps","encoding":null},
".nc":{"mime":"application/x-netcdf","encoding":null},
".ncm":{"mime":"application/vnd.nokia.configuration-message","encoding":null},
".nif":{"mime":"image/x-niff","encoding":null},
".niff":{"mime":"image/x-niff","encoding":null},
".nix":{"mime":"application/x-mix-transfer","encoding":null},
".nsc":{"mime":"application/x-conference","encoding":null},
".nvd":{"mime":"application/x-navidoc","encoding":null},
".o":{"mime":"application/octet-stream","encoding":null},
".oda":{"mime":"application/oda","encoding":null},
".omc":{"mime":"application/x-omc","encoding":null},
".omcd":{"mime":"application/x-omcdatamaker","encoding":null},
".omcr":{"mime":"application/x-omcregerator","encoding":null},
".p":{"mime":"text/x-pascal","encoding":null},
".p10":{"mime":"application/pkcs10","encoding":null},
".p10":{"mime":"application/x-pkcs10","encoding":null},
".p12":{"mime":"application/pkcs-12","encoding":null},
".p12":{"mime":"application/x-pkcs12","encoding":null},
".p7a":{"mime":"application/x-pkcs7-signature","encoding":null},
".p7c":{"mime":"application/pkcs7-mime","encoding":null},
".p7c":{"mime":"application/x-pkcs7-mime","encoding":null},
".p7m":{"mime":"application/pkcs7-mime","encoding":null},
".p7m":{"mime":"application/x-pkcs7-mime","encoding":null},
".p7r":{"mime":"application/x-pkcs7-certreqresp","encoding":null},
".p7s":{"mime":"application/pkcs7-signature","encoding":null},
".part":{"mime":"application/pro_eng","encoding":null},
".pas":{"mime":"text/pascal","encoding":null},
".pbm":{"mime":"image/x-portable-bitmap","encoding":null},
".pcl":{"mime":"application/vnd.hp-pcl","encoding":null},
".pcl":{"mime":"application/x-pcl","encoding":null},
".pct":{"mime":"image/x-pict","encoding":null},
".pcx":{"mime":"image/x-pcx","encoding":null},
".pdb":{"mime":"chemical/x-pdb","encoding":null},
".pdf":{"mime":"application/pdf","encoding":null},
".pfunk":{"mime":"audio/make","encoding":null},
".pfunk":{"mime":"audio/make.my.funk","encoding":null},
".pgm":{"mime":"image/x-portable-graymap","encoding":null},
".pgm":{"mime":"image/x-portable-greymap","encoding":null},
".pic":{"mime":"image/pict","encoding":null},
".pict":{"mime":"image/pict","encoding":null},
".pkg":{"mime":"application/x-newton-compatible-pkg","encoding":null},
".pko":{"mime":"application/vnd.ms-pki.pko","encoding":null},
".pl":{"mime":"text/plain","encoding":null},
".pl":{"mime":"text/x-script.perl","encoding":null},
".plx":{"mime":"application/x-pixclscript","encoding":null},
".pm":{"mime":"image/x-xpixmap","encoding":null},
".pm":{"mime":"text/x-script.perl-module","encoding":null},
".pm4":{"mime":"application/x-pagemaker","encoding":null},
".pm5":{"mime":"application/x-pagemaker","encoding":null},
".png":{"mime":"image/png","encoding":null},
".pnm":{"mime":"application/x-portable-anymap","encoding":null},
".pnm":{"mime":"image/x-portable-anymap","encoding":null},
".pot":{"mime":"application/mspowerpoint","encoding":null},
".pot":{"mime":"application/vnd.ms-powerpoint","encoding":null},
".pov":{"mime":"model/x-pov","encoding":null},
".ppa":{"mime":"application/vnd.ms-powerpoint","encoding":null},
".ppm":{"mime":"image/x-portable-pixmap","encoding":null},
".pps":{"mime":"application/mspowerpoint","encoding":null},
".pps":{"mime":"application/vnd.ms-powerpoint","encoding":null},
".ppt":{"mime":"application/mspowerpoint","encoding":null},
".ppt":{"mime":"application/powerpoint","encoding":null},
".ppt":{"mime":"application/vnd.ms-powerpoint","encoding":null},
".ppt":{"mime":"application/x-mspowerpoint","encoding":null},
".ppz":{"mime":"application/mspowerpoint","encoding":null},
".pre":{"mime":"application/x-freelance","encoding":null},
".prt":{"mime":"application/pro_eng","encoding":null},
".ps":{"mime":"application/postscript","encoding":null},
".psd":{"mime":"application/octet-stream","encoding":null},
".pvu":{"mime":"paleovu/x-pv","encoding":null},
".pwz":{"mime":"application/vnd.ms-powerpoint","encoding":null},
".py":{"mime":"text/x-script.phyton","encoding":null},
".pyc":{"mime":"application/x-bytecode.python","encoding":null},
".qcp":{"mime":"audio/vnd.qcelp","encoding":null},
".qd3":{"mime":"x-world/x-3dmf","encoding":null},
".qd3d":{"mime":"x-world/x-3dmf","encoding":null},
".qif":{"mime":"image/x-quicktime","encoding":null},
".qt":{"mime":"video/quicktime","encoding":null},
".qtc":{"mime":"video/x-qtc","encoding":null},
".qti":{"mime":"image/x-quicktime","encoding":null},
".qtif":{"mime":"image/x-quicktime","encoding":null},
".ra":{"mime":"audio/x-pn-realaudio","encoding":null},
".ra":{"mime":"audio/x-pn-realaudio-plugin","encoding":null},
".ra":{"mime":"audio/x-realaudio","encoding":null},
".ram":{"mime":"audio/x-pn-realaudio","encoding":null},
".ras":{"mime":"application/x-cmu-raster","encoding":null},
".ras":{"mime":"image/cmu-raster","encoding":null},
".ras":{"mime":"image/x-cmu-raster","encoding":null},
".rast":{"mime":"image/cmu-raster","encoding":null},
".rexx":{"mime":"text/x-script.rexx","encoding":null},
".rf":{"mime":"image/vnd.rn-realflash","encoding":null},
".rgb":{"mime":"image/x-rgb","encoding":null},
".rm":{"mime":"application/vnd.rn-realmedia","encoding":null},
".rm":{"mime":"audio/x-pn-realaudio","encoding":null},
".rmi":{"mime":"audio/mid","encoding":null},
".rmm":{"mime":"audio/x-pn-realaudio","encoding":null},
".rmp":{"mime":"audio/x-pn-realaudio","encoding":null},
".rmp":{"mime":"audio/x-pn-realaudio-plugin","encoding":null},
".rng":{"mime":"application/ringing-tones","encoding":null},
".rng":{"mime":"application/vnd.nokia.ringing-tone","encoding":null},
".rnx":{"mime":"application/vnd.rn-realplayer","encoding":null},
".roff":{"mime":"application/x-troff","encoding":null},
".rp":{"mime":"image/vnd.rn-realpix","encoding":null},
".rpm":{"mime":"audio/x-pn-realaudio-plugin","encoding":null},
".rt":{"mime":"text/richtext","encoding":null},
".rt":{"mime":"text/vnd.rn-realtext","encoding":null},
".rtf":{"mime":"application/rtf","encoding":null},
".rtf":{"mime":"application/x-rtf","encoding":null},
".rtf":{"mime":"text/richtext","encoding":null},
".rtx":{"mime":"application/rtf","encoding":null},
".rtx":{"mime":"text/richtext","encoding":null},
".rv":{"mime":"video/vnd.rn-realvideo","encoding":null},
".s":{"mime":"text/x-asm","encoding":null},
".s3m":{"mime":"audio/s3m","encoding":null},
".saveme":{"mime":"application/octet-stream","encoding":null},
".sbk":{"mime":"application/x-tbook","encoding":null},
".scm":{"mime":"application/x-lotusscreencam","encoding":null},
".scm":{"mime":"text/x-script.guile","encoding":null},
".scm":{"mime":"text/x-script.scheme","encoding":null},
".scm":{"mime":"video/x-scm","encoding":null},
".sdml":{"mime":"text/plain","encoding":null},
".sdp":{"mime":"application/sdp","encoding":null},
".sdp":{"mime":"application/x-sdp","encoding":null},
".sdr":{"mime":"application/sounder","encoding":null},
".sea":{"mime":"application/sea","encoding":null},
".sea":{"mime":"application/x-sea","encoding":null},
".set":{"mime":"application/set","encoding":null},
".sgm":{"mime":"text/sgml","encoding":null},
".sgm":{"mime":"text/x-sgml","encoding":null},
".sgml":{"mime":"text/sgml","encoding":null},
".sgml":{"mime":"text/x-sgml","encoding":null},
".sh":{"mime":"application/x-bsh","encoding":null},
".sh":{"mime":"application/x-sh","encoding":null},
".sh":{"mime":"application/x-shar","encoding":null},
".sh":{"mime":"text/x-script.sh","encoding":null},
".shar":{"mime":"application/x-bsh","encoding":null},
".shar":{"mime":"application/x-shar","encoding":null},
".shtml":{"mime":"text/html","encoding":null},
".shtml":{"mime":"text/x-server-parsed-html","encoding":null},
".sid":{"mime":"audio/x-psid","encoding":null},
".sit":{"mime":"application/x-sit","encoding":null},
".sit":{"mime":"application/x-stuffit","encoding":null},
".skd":{"mime":"application/x-koan","encoding":null},
".skm":{"mime":"application/x-koan","encoding":null},
".skp":{"mime":"application/x-koan","encoding":null},
".skt":{"mime":"application/x-koan","encoding":null},
".sl":{"mime":"application/x-seelogo","encoding":null},
".smi":{"mime":"application/smil","encoding":null},
".smil":{"mime":"application/smil","encoding":null},
".snd":{"mime":"audio/basic","encoding":null},
".snd":{"mime":"audio/x-adpcm","encoding":null},
".sol":{"mime":"application/solids","encoding":null},
".spc":{"mime":"application/x-pkcs7-certificates","encoding":null},
".spc":{"mime":"text/x-speech","encoding":null},
".spl":{"mime":"application/futuresplash","encoding":null},
".spr":{"mime":"application/x-sprite","encoding":null},
".sprite":{"mime":"application/x-sprite","encoding":null},
".src":{"mime":"application/x-wais-source","encoding":null},
".ssi":{"mime":"text/x-server-parsed-html","encoding":null},
".ssm":{"mime":"application/streamingmedia","encoding":null},
".sst":{"mime":"application/vnd.ms-pki.certstore","encoding":null},
".step":{"mime":"application/step","encoding":null},
".stl":{"mime":"application/sla","encoding":null},
".stl":{"mime":"application/vnd.ms-pki.stl","encoding":null},
".stl":{"mime":"application/x-navistyle","encoding":null},
".stp":{"mime":"application/step","encoding":null},
".sv4cpio":{"mime":"application/x-sv4cpio","encoding":null},
".sv4crc":{"mime":"application/x-sv4crc","encoding":null},
".svf":{"mime":"image/vnd.dwg","encoding":null},
".svf":{"mime":"image/x-dwg","encoding":null},
".svr":{"mime":"application/x-world","encoding":null},
".svr":{"mime":"x-world/x-svr","encoding":null},
".swf":{"mime":"application/x-shockwave-flash","encoding":null},
".t":{"mime":"application/x-troff","encoding":null},
".talk":{"mime":"text/x-speech","encoding":null},
".tar":{"mime":"application/x-tar","encoding":null},
".tbk":{"mime":"application/toolbook","encoding":null},
".tbk":{"mime":"application/x-tbook","encoding":null},
".tcl":{"mime":"application/x-tcl","encoding":null},
".tcl":{"mime":"text/x-script.tcl","encoding":null},
".tcsh":{"mime":"text/x-script.tcsh","encoding":null},
".tex":{"mime":"application/x-tex","encoding":null},
".texi":{"mime":"application/x-texinfo","encoding":null},
".texinfo":{"mime":"application/x-texinfo","encoding":null},
".text":{"mime":"application/plain","encoding":null},
".text":{"mime":"text/plain","encoding":null},
".tgz":{"mime":"application/gnutar","encoding":null},
".tgz":{"mime":"application/x-compressed","encoding":null},
".tif":{"mime":"image/tiff","encoding":null},
".tif":{"mime":"image/x-tiff","encoding":null},
".tiff":{"mime":"image/tiff","encoding":null},
".tiff":{"mime":"image/x-tiff","encoding":null},
".tr":{"mime":"application/x-troff","encoding":null},
".tsi":{"mime":"audio/tsp-audio","encoding":null},
".tsp":{"mime":"application/dsptype","encoding":null},
".tsp":{"mime":"audio/tsplayer","encoding":null},
".tsv":{"mime":"text/tab-separated-values","encoding":null},
".turbot":{"mime":"image/florian","encoding":null},
".txt":{"mime":"text/plain","encoding":null},
".uil":{"mime":"text/x-uil","encoding":null},
".uni":{"mime":"text/uri-list","encoding":null},
".unis":{"mime":"text/uri-list","encoding":null},
".unv":{"mime":"application/i-deas","encoding":null},
".uri":{"mime":"text/uri-list","encoding":null},
".uris":{"mime":"text/uri-list","encoding":null},
".ustar":{"mime":"application/x-ustar","encoding":null},
".ustar":{"mime":"multipart/x-ustar","encoding":null},
".uu":{"mime":"application/octet-stream","encoding":null},
".uu":{"mime":"text/x-uuencode","encoding":null},
".uue":{"mime":"text/x-uuencode","encoding":null},
".vcd":{"mime":"application/x-cdlink","encoding":null},
".vcs":{"mime":"text/x-vcalendar","encoding":null},
".vda":{"mime":"application/vda","encoding":null},
".vdo":{"mime":"video/vdo","encoding":null},
".vew":{"mime":"application/groupwise","encoding":null},
".viv":{"mime":"video/vivo","encoding":null},
".viv":{"mime":"video/vnd.vivo","encoding":null},
".vivo":{"mime":"video/vivo","encoding":null},
".vivo":{"mime":"video/vnd.vivo","encoding":null},
".vmd":{"mime":"application/vocaltec-media-desc","encoding":null},
".vmf":{"mime":"application/vocaltec-media-file","encoding":null},
".voc":{"mime":"audio/voc","encoding":null},
".voc":{"mime":"audio/x-voc","encoding":null},
".vos":{"mime":"video/vosaic","encoding":null},
".vox":{"mime":"audio/voxware","encoding":null},
".vqe":{"mime":"audio/x-twinvq-plugin","encoding":null},
".vqf":{"mime":"audio/x-twinvq","encoding":null},
".vql":{"mime":"audio/x-twinvq-plugin","encoding":null},
".vrml":{"mime":"application/x-vrml","encoding":null},
".vrml":{"mime":"model/vrml","encoding":null},
".vrml":{"mime":"x-world/x-vrml","encoding":null},
".vrt":{"mime":"x-world/x-vrt","encoding":null},
".vsd":{"mime":"application/x-visio","encoding":null},
".vst":{"mime":"application/x-visio","encoding":null},
".vsw":{"mime":"application/x-visio","encoding":null},
".w60":{"mime":"application/wordperfect6.0","encoding":null},
".w61":{"mime":"application/wordperfect6.1","encoding":null},
".w6w":{"mime":"application/msword","encoding":null},
".wav":{"mime":"audio/wav","encoding":null},
".wav":{"mime":"audio/x-wav","encoding":null},
".wb1":{"mime":"application/x-qpro","encoding":null},
".wbmp":{"mime":"image/vnd.wap.wbmp","encoding":null},
".web":{"mime":"application/vnd.xara","encoding":null},
".wiz":{"mime":"application/msword","encoding":null},
".wk1":{"mime":"application/x-123","encoding":null},
".wmf":{"mime":"windows/metafile","encoding":null},
".wml":{"mime":"text/vnd.wap.wml","encoding":null},
".wmlc":{"mime":"application/vnd.wap.wmlc","encoding":null},
".wmls":{"mime":"text/vnd.wap.wmlscript","encoding":null},
".wmlsc":{"mime":"application/vnd.wap.wmlscriptc","encoding":null},
".word":{"mime":"application/msword","encoding":null},
".wp":{"mime":"application/wordperfect","encoding":null},
".wp5":{"mime":"application/wordperfect","encoding":null},
".wp5":{"mime":"application/wordperfect6.0","encoding":null},
".wp6":{"mime":"application/wordperfect","encoding":null},
".wpd":{"mime":"application/wordperfect","encoding":null},
".wpd":{"mime":"application/x-wpwin","encoding":null},
".wq1":{"mime":"application/x-lotus","encoding":null},
".wri":{"mime":"application/mswrite","encoding":null},
".wri":{"mime":"application/x-wri","encoding":null},
".wrl":{"mime":"application/x-world","encoding":null},
".wrl":{"mime":"model/vrml","encoding":null},
".wrl":{"mime":"x-world/x-vrml","encoding":null},
".wrz":{"mime":"model/vrml","encoding":null},
".wrz":{"mime":"x-world/x-vrml","encoding":null},
".wsc":{"mime":"text/scriplet","encoding":null},
".wsrc":{"mime":"application/x-wais-source","encoding":null},
".wtk":{"mime":"application/x-wintalk","encoding":null},
".xbm":{"mime":"image/x-xbitmap","encoding":null},
".xbm":{"mime":"image/x-xbm","encoding":null},
".xbm":{"mime":"image/xbm","encoding":null},
".xdr":{"mime":"video/x-amt-demorun","encoding":null},
".xgz":{"mime":"xgl/drawing","encoding":null},
".xif":{"mime":"image/vnd.xiff","encoding":null},
".xl":{"mime":"application/excel","encoding":null},
".xla":{"mime":"application/excel","encoding":null},
".xla":{"mime":"application/x-excel","encoding":null},
".xla":{"mime":"application/x-msexcel","encoding":null},
".xlb":{"mime":"application/excel","encoding":null},
".xlb":{"mime":"application/vnd.ms-excel","encoding":null},
".xlb":{"mime":"application/x-excel","encoding":null},
".xlc":{"mime":"application/excel","encoding":null},
".xlc":{"mime":"application/vnd.ms-excel","encoding":null},
".xlc":{"mime":"application/x-excel","encoding":null},
".xld":{"mime":"application/excel","encoding":null},
".xld":{"mime":"application/x-excel","encoding":null},
".xlk":{"mime":"application/excel","encoding":null},
".xlk":{"mime":"application/x-excel","encoding":null},
".xll":{"mime":"application/excel","encoding":null},
".xll":{"mime":"application/vnd.ms-excel","encoding":null},
".xll":{"mime":"application/x-excel","encoding":null},
".xlm":{"mime":"application/excel","encoding":null},
".xlm":{"mime":"application/vnd.ms-excel","encoding":null},
".xlm":{"mime":"application/x-excel","encoding":null},
".xls":{"mime":"application/excel","encoding":null},
".xls":{"mime":"application/vnd.ms-excel","encoding":null},
".xls":{"mime":"application/x-excel","encoding":null},
".xls":{"mime":"application/x-msexcel","encoding":null},
".xlt":{"mime":"application/excel","encoding":null},
".xlt":{"mime":"application/x-excel","encoding":null},
".xlv":{"mime":"application/excel","encoding":null},
".xlv":{"mime":"application/x-excel","encoding":null},
".xlw":{"mime":"application/excel","encoding":null},
".xlw":{"mime":"application/vnd.ms-excel","encoding":null},
".xlw":{"mime":"application/x-excel","encoding":null},
".xlw":{"mime":"application/x-msexcel","encoding":null},
".xm":{"mime":"audio/xm","encoding":null},
".xml":{"mime":"application/xml","encoding":null},
".xml":{"mime":"text/xml","encoding":null},
".xmz":{"mime":"xgl/movie","encoding":null},
".xpix":{"mime":"application/x-vnd.ls-xpix","encoding":null},
".xpm":{"mime":"image/x-xpixmap","encoding":null},
".xpm":{"mime":"image/xpm","encoding":null},
".x-png":{"mime":"image/png","encoding":null},
".xsr":{"mime":"video/x-amt-showrun","encoding":null},
".xwd":{"mime":"image/x-xwd","encoding":null},
".xwd":{"mime":"image/x-xwindowdump","encoding":null},
".xyz":{"mime":"chemical/x-pdb","encoding":null},
".z":{"mime":"application/x-compress","encoding":null},
".z":{"mime":"application/x-compressed","encoding":null},
".zip":{"mime":"application/x-compressed","encoding":null},
".zip":{"mime":"application/x-zip-compressed","encoding":null},
".zip":{"mime":"application/zip","encoding":null},
".zip":{"mime":"multipart/x-zip","encoding":null},
".zoo":{"mime":"application/octet-stream","encoding":null},
".zsh":{"mime":"text/x-script.zsh","encoding":null}
};