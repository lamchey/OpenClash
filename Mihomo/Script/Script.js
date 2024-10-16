// Mihomo Party覆写脚本
// 作者：https://github.com/lamchey
// 项目地址：https://github.com/lamchey/HelloWorld/Mihomo
// 时间：202410151704
function main(config) {
  config["proxy-groups"] = [
    {
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置",
      name: "🚀 节点选择",
      type: "select",
      proxies: ["🇭🇰 香港节点", "🇸🇬 新加坡节点", "🇹🇼 台湾节点", "🇯🇵 日本节点", "🇺🇸 美国节点", "🇬🇧 英国节点", "🇲🇾 马来西亚节点", "🇹🇷 土耳其节点", "🇦🇷 阿根廷节点"],
    },	
    {
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置",
      name: "✈ 手动切换",
      type: "select",
    },
    {
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置",
      name: "♻️ 自动选择",
      type: "url-test",
      interval: 300,
    },
	  {
      name: "🚀 GitHub",
      type: "select",
      proxies: ["🚀 节点选择", "🇭🇰 香港节点", "🇸🇬 新加坡节点", "🇹🇼 台湾节点", "🇯🇵 日本节点", "🇺🇸 美国节点", "🇬🇧 英国节点", "🇲🇾 马来西亚节点", "🇹🇷 土耳其节点", "🇦🇷 阿根廷节点", "✈ 手动切换", "♻️ 自动选择", "🎯 全球直连"],
    },
    {
      name: "📲 Telegram",
      type: "select",
      proxies: ["🚀 节点选择", "🇭🇰 香港节点", "🇸🇬 新加坡节点", "🇹🇼 台湾节点", "🇯🇵 日本节点", "🇺🇸 美国节点", "🇬🇧 英国节点", "🇲🇾 马来西亚节点", "🇹🇷 土耳其节点", "🇦🇷 阿根廷节点", "✈ 手动切换", "♻️ 自动选择", "🎯 全球直连"],
    },
	  {
      name: "📹 YouTube",
      type: "select",
      proxies: ["🚀 节点选择", "🇭🇰 香港节点", "🇸🇬 新加坡节点", "🇹🇼 台湾节点", "🇯🇵 日本节点", "🇺🇸 美国节点", "🇬🇧 英国节点", "🇲🇾 马来西亚节点", "🇹🇷 土耳其节点", "🇦🇷 阿根廷节点", "✈ 手动切换", "♻️ 自动选择", "🎯 全球直连"],
    },
    {
      name: "🐋 Docker",
      type: "select",
      proxies: ["🚀 节点选择", "🇭🇰 香港节点", "🇸🇬 新加坡节点", "🇹🇼 台湾节点", "🇯🇵 日本节点", "🇺🇸 美国节点", "🇬🇧 英国节点", "🇲🇾 马来西亚节点", "🇹🇷 土耳其节点", "🇦🇷 阿根廷节点", "✈ 手动切换", "♻️ 自动选择", "🎯 全球直连"],
    },
	  {
      name: "📺 Bahamut",
      type: "select",
      proxies: ["🇹🇼 台湾节点", "✈ 手动切换", "♻️ 自动选择", "🎯 全球直连"],
    },
	  {
      name: "💬 ChatGPT",
      type: "select",
      proxies: ["🇺🇸 美国节点", "🇸🇬 新加坡节点", "🇹🇼 台湾节点", "🇯🇵 日本节点", "🎯 全球直连"],
    },
	  {
      name: "Ⓜ️ Copilot",
      type: "select",
      proxies: ["🇺🇸 美国节点", "🇸🇬 新加坡节点", "🇹🇼 台湾节点", "🇯🇵 日本节点", "🎯 全球直连"],
    },
	  {
      name: "📢 谷歌FCM",
      type: "select",
      proxies: ["🚀 节点选择", "🇭🇰 香港节点", "🇸🇬 新加坡节点", "🇹🇼 台湾节点", "🇯🇵 日本节点", "🇺🇸 美国节点", "🇬🇧 英国节点", "🇲🇾 马来西亚节点", "🇹🇷 土耳其节点", "🇦🇷 阿根廷节点", "✈ 手动切换", "♻️ 自动选择", "🎯 全球直连"],
    },
    {
      name: "🔎 谷歌服务",
      type: "select",
      proxies: ["🚀 节点选择", "🇭🇰 香港节点", "🇸🇬 新加坡节点", "🇹🇼 台湾节点", "🇯🇵 日本节点", "🇺🇸 美国节点", "🇬🇧 英国节点", "🇲🇾 马来西亚节点", "🇹🇷 土耳其节点", "🇦🇷 阿根廷节点", "✈ 手动切换", "♻️ 自动选择", "🎯 全球直连"],
    },
	  {
      name: "🍎 苹果服务",
      type: "select",
      proxies: ["🎯 全球直连", "🚀 节点选择", "🇭🇰 香港节点", "🇸🇬 新加坡节点", "🇹🇼 台湾节点", "🇯🇵 日本节点", "🇺🇸 美国节点", "🇬🇧 英国节点", "🇲🇾 马来西亚节点", "🇹🇷 土耳其节点", "🇦🇷 阿根廷节点", "✈ 手动切换", "♻️ 自动选择", ],
    },
	  {
      name: "Ⓜ️ 微软服务",
      type: "select",
      proxies: ["🎯 全球直连", "🚀 节点选择", "🇭🇰 香港节点", "🇸🇬 新加坡节点", "🇹🇼 台湾节点", "🇯🇵 日本节点", "🇺🇸 美国节点", "🇬🇧 英国节点", "🇲🇾 马来西亚节点", "🇹🇷 土耳其节点", "🇦🇷 阿根廷节点", "✈ 手动切换", "♻️ 自动选择", ],
    },
	  {
      name: "🍘️ 小米服务",
      type: "select",
      proxies: ["🎯 全球直连", "🚀 节点选择", "🇭🇰 香港节点", "🇸🇬 新加坡节点", "🇹🇼 台湾节点", "🇯🇵 日本节点", "🇺🇸 美国节点", "🇬🇧 英国节点", "🇲🇾 马来西亚节点", "🇹🇷 土耳其节点", "🇦🇷 阿根廷节点", "✈ 手动切换", "♻️ 自动选择", ],
    },
	  {
      name: "🌍 国内媒体",
      type: "select",
      proxies: ["🎯 全球直连", "🇭🇰 香港节点", "🇹🇼 台湾节点"],
    },
	  {
      name: "🌍 国外媒体",
      type: "select",
      proxies: ["🚀 节点选择", "🇭🇰 香港节点", "🇸🇬 新加坡节点", "🇹🇼 台湾节点", "🇯🇵 日本节点", "🇺🇸 美国节点", "🇬🇧 英国节点", "🇲🇾 马来西亚节点", "🇹🇷 土耳其节点", "🇦🇷 阿根廷节点", "✈ 手动切换", "♻️ 自动选择", "🎯 全球直连"],
    },
	  {
      name: "⛔ 广告屏蔽",
      type: "select",
      proxies: ["REJECT"],
    },
	  {
      name: "🚀 全球代理",
      type: "select",
      proxies: ["🚀 节点选择", "🇭🇰 香港节点", "🇸🇬 新加坡节点", "🇹🇼 台湾节点", "🇯🇵 日本节点", "🇺🇸 美国节点", "🇬🇧 英国节点", "🇲🇾 马来西亚节点", "🇹🇷 土耳其节点", "🇦🇷 阿根廷节点", "✈ 手动切换", "♻️ 自动选择", "🎯 全球直连"],
    },
	  {
      name: "🎯 全球直连",
      type: "select",
      proxies: ["DIRECT"],
    },
	  {
      name: "🐟 漏网之鱼",
      type: "select",
      proxies: ["🚀 节点选择", "🇭🇰 香港节点", "🇸🇬 新加坡节点", "🇹🇼 台湾节点", "🇯🇵 日本节点", "🇺🇸 美国节点", "🇬🇧 英国节点", "🇲🇾 马来西亚节点", "🇹🇷 土耳其节点", "🇦🇷 阿根廷节点", "✈ 手动切换", "♻️ 自动选择", "🎯 全球直连"],
    },
   {
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置",
      filter: "(?i)香港|Hong Kong|HK|🇭🇰",
      name: "🇭🇰 香港节点",
      type: "url-test",
      interval: 300,
    },
    {
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置",
      filter: "(?i)新加坡|Singapore|🇸🇬",
      name: "🇸🇬 新加坡节点",
      type: "url-test",
      interval: 300,
    },
	  {
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置",
      filter: "(?i)台湾|Taiwan|TW|🇹🇼",
      name: "🇹🇼 台湾节点",
      type: "url-test",
      interval: 300,
    },
    {
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置",
      filter: "(?i)日本|Japan|🇯🇵",
      name: "🇯🇵 日本节点",
      type: "url-test",
      interval: 300,
    },
    {
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置",
      filter: "(?i)美国|USA|🇺🇸",
      name: "🇺🇸 美国节点",
      type: "url-test",
      interval: 300,
    },
	  {
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置",
      filter: "(?i)英国|UK|🇬🇧",
      name: "🇬🇧 英国节点",
      type: "url-test",
      interval: 300,
    },
	  {
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置",
      filter: "(?i)马来西亚|Malaysia|🇲🇾",
      name: "🇲🇾 马来西亚节点",
      type: "url-test",
      interval: 300,
    },
	  {
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置",
      filter: "(?i)土耳其|Turkey|Türkiye|🇹🇷",
      name: "🇹🇷 土耳其节点",
      type: "url-test",
      interval: 300,
    },
	  {
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置",
      filter: "(?i)阿根廷|Argentina|🇦🇷",
      name: "🇦🇷 阿根廷节点",
      type: "url-test",
      interval: 300,
    }
  ];
  if (!config['rule-providers']) {
    config['rule-providers'] = {};
  }
  config["rule-providers"] = Object.assign(config["rule-providers"], {
    Custom_rules_Direct: {
      url: "https://ghp.ci/https://raw.githubusercontent.com/lamchey/OpenClash/refs/heads/main/Rules/Custom_rules_Direct.list",
      path: "./ruleset/Custom_rules_Direct.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
    Lan: {
      url: "https://ghp.ci/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Lan/Lan.list",
      path: "./ruleset/Lan.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
    Direct: {
      url: "https://ghp.ci/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Direct/Direct.list",
      path: "./ruleset/Direct.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
	ChinaDomain: {
      url: "https://ghp.ci/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/China/China.list",
      path: "./ruleset/ChinaDomain.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
	ChinaIp: {
      url: "https://ghp.ci/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/ChinaIPs/ChinaIPs.list",
      path: "./ruleset/ChinaIp.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
	GoogleCN: {
      url: "https://ghp.ci/https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/GoogleCN.list",
      path: "./ruleset/GoogleCN.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
	PT_Download: {
      url: "https://ghp.ci/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/PrivateTracker/PrivateTracker.list",
      path: "./ruleset/PT_Download.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
	BT_Download: {
      url: "https://ghp.ci/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Download/Download.list",
      path: "./ruleset/BT_Download.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
	Telegram: {
      url: "https://ghp.ci/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Telegram/Telegram.list",
      path: "./ruleset/Telegram.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
	ChatGPT: {
      url: "https://ghp.ci/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/OpenAI/OpenAI.list",
      path: "./ruleset/ChatGPT.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
	Copilot: {
      url: "https://ghp.ci/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Copilot/Copilot.list",
      path: "./ruleset/Copilot.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
	GitHub: {
      url: "https://ghp.ci/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/GitHub/GitHub.list",
      path: "./ruleset/GitHub.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
	Apple: {
      url: "https://ghp.ci/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Apple/Apple.list",
      path: "./ruleset/Apple.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
	Microsoft: {
      url: "https://ghp.ci/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Microsoft/Microsoft.list",
      path: "./ruleset/Microsoft.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
	YouTube: {
      url: "https://ghp.ci/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/YouTube/YouTube.list",
      path: "./ruleset/YouTube.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
	Google: {
      url: "https://ghp.ci/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Google/Google.list",
      path: "./ruleset/Google.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
	GoogleFCM: {
      url: "https://ghp.ci/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/GoogleFCM/GoogleFCM.list",
      path: "./ruleset/GoogleFCM.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
    Docker: {
      url: "https://ghp.ci/https://github.com/blackmatrix7/ios_rule_script/blob/master/rule/Clash/Docker/Docker.list",
      path: "./ruleset/Docker.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
    XiaoMi: {
      url: "https://ghp.ci/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/XiaoMi/XiaoMi.list",
      path: "./ruleset/XiaoMi.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
	Bahamut: {
      url: "https://ghp.ci/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Bahamut/Bahamut.list",
      path: "./ruleset/Bahamut.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
	ChinaMedia: {
      url: "https://ghp.ci/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/ChinaMedia/ChinaMedia.list",
      path: "./ruleset/ChinaMedia.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
	GlobalMedia: {
      url: "https://ghp.ci/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/GlobalMedia/GlobalMedia.list",
      path: "./ruleset/GlobalMedia.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
	ProxyGFW: {
      url: "https://ghp.ci/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/Proxy/Proxy.list",
      path: "./ruleset/ProxyGFW.list",
      behavior: "classical",
      interval: 86400,
      format: "text",
      type: "http",
    },
	antiAD: {
      url: "https://ghp.ci/https://raw.githubusercontent.com/privacy-protection-tools/anti-AD/master/anti-ad-clash.yaml",
      path: "./ruleset/anti-AD.yaml",
      behavior: "domain",
      interval: 86400,
      format: "yaml",
      type: "http",
    },
	antiADwhite: {
      url: "https://ghp.ci/https://raw.githubusercontent.com/privacy-protection-tools/dead-horse/master/anti-ad-white-for-clash.yaml",
      path: "./ruleset/anti-AD-white.yaml",
      behavior: "domain",
      interval: 86400,
      format: "yaml",
      type: "http",
    },
  });

  config["rules"] = [
    //去广告规则
    "AND,((RULE-SET,antiAD),(NOT,((RULE-SET,antiADwhite)))),⛔ 广告屏蔽", 
	  
    //自定义直连规则
    "RULE-SET,Custom_rules_Direct,🎯 全球直连",
	  
    //直连规则
    "RULE-SET,Lan,🎯 全球直连",
    "RULE-SET,Direct,🎯 全球直连",
    "RULE-SET,PT_Download,🎯 全球直连",
    "RULE-SET,BT_Download,🎯 全球直连",
    "RULE-SET,GoogleCN,🎯 全球直连",
    "RULE-SET,ChinaDomain,🎯 全球直连",
    
	  
    //自定义代理规则
    "DOMAIN-SUFFIX,oyunfor.com,🇹🇷 土耳其节点",

    //代理规则
    "RULE-SET,Docker,🐋 Docker",
    "RULE-SET,GitHub,🚀 GitHub",
    "RULE-SET,Telegram,📲 Telegram",
    "RULE-SET,ChatGPT,💬 ChatGPT",
    "RULE-SET,Copilot,Ⓜ️ Copilot",
    "RULE-SET,YouTube,📹 YouTube",
    "RULE-SET,Bahamut,📺 Bahamut",
    "RULE-SET,ChinaMedia,🌍 国内媒体",
    "RULE-SET,GlobalMedia,🌍 国外媒体",
    "RULE-SET,GoogleFCM,📢 谷歌FCM",
    "RULE-SET,Google,🔎 谷歌服务",
    "RULE-SET,Apple,🍎 苹果服务",
    "RULE-SET,Microsoft,Ⓜ️ 微软服务",
    "RULE-SET,XiaoMi,🍘️ 小米服务",
    "RULE-SET,ProxyGFW,🚀 全球代理",

    //直连规则  
    "RULE-SET,ChinaIp,🎯 全球直连",
	  
    //兜底分流  
    "MATCH,🐟 漏网之鱼",
  ];
  return config;
}
