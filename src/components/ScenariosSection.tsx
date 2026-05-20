"use client";

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";

interface ChatMessage {
  type: "user" | "bot";
  sender?: string;
  text: string;
}

interface Scenario {
  label: string;
  desc: string;
  chat: ChatMessage[];
}

const scenarios: Scenario[] = [
  {
    label: "数据助手",
    desc: "AI 实时查询业务数据，自动生成分析报告。团队成员只需 @DataBot 即可获得数据洞察。",
    chat: [
      { type: "user", text: "@DataBot 本月 GMV 多少？" },
      {
        type: "bot",
        sender: "DataBot",
        text: "本月 GMV ¥1,280 万，环比 +15.3% 📈",
      },
      {
        type: "bot",
        sender: "DataBot",
        text: "已生成详细报告 → #data-reports",
      },
    ],
  },
  {
    label: "日报周报",
    desc: "Bot 自动整合团队进度、代码提交、任务完成情况，一键生成结构化周报。",
    chat: [
      { type: "user", text: "@ReportBot 帮我生成本周周报" },
      { type: "bot", sender: "ReportBot", text: "正在整合数据... ⏳" },
      {
        type: "bot",
        sender: "ReportBot",
        text: "✅ 周报已生成，包含 23 项进度更新，已推送至 #weekly-report",
      },
    ],
  },
  {
    label: "异常告警",
    desc: "实时监控系统状态，异常第一时间通知团队，附带初步诊断和建议。",
    chat: [
      {
        type: "bot",
        sender: "AlertBot",
        text: "⚠️ API 延迟异常：P99 从 200ms 升至 1.2s",
      },
      {
        type: "bot",
        sender: "AlertBot",
        text: "初步判断：DB 连接池满载，建议扩容",
      },
      { type: "user", text: "收到，我来处理" },
    ],
  },
  {
    label: "知识问答",
    desc: "基于团队文档和历史对话，AI 即时回答新人提问，减少重复沟通成本。",
    chat: [
      { type: "user", text: "@WikiBot 我们的部署流程是什么？" },
      {
        type: "bot",
        sender: "WikiBot",
        text: "根据团队文档，部署流程为：\n1. PR 合并 → 2. CI 构建 → 3. Staging 验证 → 4. 生产发布",
      },
      {
        type: "bot",
        sender: "WikiBot",
        text: "📄 详见 docs/deployment-guide.md",
      },
    ],
  },
];

function ChatBubble({ msg }: { msg: ChatMessage }) {
  return (
    <div
      className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm ${
          msg.type === "user"
            ? "bg-blue-500 text-white rounded-br-md"
            : "bg-white/[0.05] border border-white/[0.08] text-foreground rounded-bl-md"
        }`}
      >
        {msg.type === "bot" && msg.sender && (
          <p className="text-xs text-cyan-400 font-medium mb-1">
            🤖 {msg.sender}
          </p>
        )}
        <p className="whitespace-pre-line">{msg.text}</p>
      </div>
    </div>
  );
}

export default function ScenariosSection() {
  return (
    <section id="scenarios" className="py-24 md:py-32 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            真实场景，即刻体验
          </h2>
          <p className="text-muted-foreground text-lg">
            看看团队如何与 AI Agent 协作
          </p>
        </div>

        <Tabs defaultValue={0}>
          <TabsList variant="line" className="mx-auto mb-8 flex-wrap">
            {scenarios.map((s, i) => (
              <TabsTrigger key={i} value={i} className="text-sm px-4 py-2">
                {s.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {scenarios.map((scenario, i) => (
            <TabsContent key={i} value={i}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="pt-4">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {scenario.label}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {scenario.desc}
                  </p>
                </div>

                <div className="space-y-3 p-6 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  {scenario.chat.map((msg, j) => (
                    <ChatBubble key={j} msg={msg} />
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
