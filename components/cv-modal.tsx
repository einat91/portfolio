"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, X } from "lucide-react"

export function CVModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        className="bg-stone-700 hover:bg-stone-800 text-white px-8 py-3 text-base"
        onClick={() => setIsOpen(true)}
      >
        <Download className="w-5 h-5 mr-2" />
        View CV
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="baskervville">Einat Ehrlich - CV</CardTitle>
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
                <X className="w-4 h-4" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-6 text-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-6">
                  <section>
                    <h3 className="font-bold text-lg mb-3 baskervville">Personal Profile</h3>
                    <p className="text-slate-700 leading-relaxed">
                      I am a self-motivated professional passionate about data analytics and leveraging data to drive
                      better decisions. I have applied my analytical skills to build insightful reports, optimize
                      workflows, and support operational excellence. I enjoy bridging data with day-to-day operations to
                      create real impact. I'm eager to join a team that values data as a key asset for driving
                      meaningful growth.
                    </p>
                  </section>

                  <section>
                    <h3 className="font-bold text-lg mb-4 baskervville">Work Experience</h3>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-base baskervville">Operations Lead & Data Analyst</h4>
                        <p className="text-slate-600 text-sm">Stealth Startup, Tel Aviv | 2023-2025</p>
                        <ul className="mt-2 space-y-1 text-slate-700 list-disc list-inside">
                          <li>
                            Built and scaled the operational and HR infrastructure, developing workflows and systems to
                            drive efficiency and support company growth.
                          </li>
                          <li>
                            Managed business operations, including legal compliance, financial planning, vendor
                            relations, and cross-functional project execution.
                          </li>
                          <li>
                            Utilized analytics tools (SQL & Tableau) to build interactive dashboards, track KPIs, and
                            deliver actionable insights to enhance strategic decision-making across the company.
                          </li>
                          <li>
                            Conducted deep-dive analyses to identify trends, optimize resource allocation, and
                            streamline operational efficiency.
                          </li>
                          <li>
                            Left to seek opportunities in a more mature, growing company with richer data and a
                            collaborative team environment.
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-base baskervville">Operations Lead & Data Analyst</h4>
                        <p className="text-slate-600 text-sm">Sensa, Tel Aviv | 2019 - 2023 (company closure)</p>
                        <ul className="mt-2 space-y-1 text-slate-700 list-disc list-inside">
                          <li>
                            Built and led the operational department, managing financial systems, HR processes and
                            global site expansion in Europe and the U.S, ensuring scalability to support rapid growth.
                          </li>
                          <li>
                            Designed and implemented dynamic financial dashboards and analytics tools (SQL, Python &
                            Power BI) to track performance, monitor budgets, and ensure compliance with regulatory
                            standards.
                          </li>
                          <li>
                            Partnered closely with the CEO to deliver data-driven forecasts, conduct in-depth business
                            analysis, and provide actionable operational recommendations that influenced strategic
                            decisions.
                          </li>
                          <li>
                            Established scalable systems for budgeting, automated reporting, and regulatory compliance,
                            reducing manual processes and significantly improving operational efficiency.
                          </li>
                          <li>
                            Spearheaded data collection and analysis initiatives to identify cost-saving opportunities,
                            optimize resource allocation, and improve organizational performance.
                          </li>
                          <li>
                            Managed cross-company projects integrating R&D teams to drive initiatives that influenced
                            production decisions and company-wide efficiency.
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-base baskervville">Political Assistant</h4>
                        <p className="text-slate-600 text-sm">The Israeli Embassy, London | 2016-2018</p>
                        <ul className="mt-2 space-y-1 text-slate-700 list-disc list-inside">
                          <li>
                            Managed the workload of the Political Department of the Embassy, including assisting the
                            Political Counsellor in their day-to-day work.
                          </li>
                          <li>
                            Responsibilities included writing intelligence reports, coordinating executive delegations
                            to and from Israel, and maintaining diplomatic relations with global counterparts.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-lg mb-4 baskervville">Education</h3>
                    <div>
                      <h4 className="font-semibold baskervville">Political Science & Middle Eastern Studies</h4>
                      <p className="text-slate-600 text-sm">The Hebrew University in Jerusalem | B.A | 2013-2016</p>
                      <p className="text-slate-700 text-sm">GPA: 89</p>
                    </div>
                    <div className="mt-3">
                      <h4 className="font-semibold baskervville">She Codes - Data Analysis with Python</h4>
                      <p className="text-slate-600 text-sm">Sep 2022-Feb 2023</p>
                      <p className="text-slate-700 text-sm">Introduction to Data Analysis, Python for Developers</p>
                    </div>
                  </section>
                </div>

                <div className="space-y-6">
                  <section>
                    <h3 className="font-bold text-lg mb-3 baskervville">Contact Details</h3>
                    <div className="space-y-2 text-sm text-slate-700">
                      <p>Tel Aviv, Israel</p>
                      <p>@einat-ehrlich</p>
                      <p>einat91@gmail.com</p>
                      <p>+972 (0) 54-2400129</p>
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-lg mb-3 baskervville">Languages</h3>
                    <div className="space-y-1 text-sm text-slate-700">
                      <p>Hebrew - Native</p>
                      <p>English - Fluent</p>
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-lg mb-3 baskervville">Technical Skills</h3>
                    <div className="space-y-2 text-sm text-slate-700">
                      <div>
                        <p className="font-medium">MS Tools</p>
                        <p>Excel, PowerPoint</p>
                      </div>
                      <div>
                        <p className="font-medium">Data Visualization</p>
                        <p>PowerBI, Tableau</p>
                      </div>
                      <div>
                        <p className="font-medium">Programming</p>
                        <p>SQL, Python (Matplotlib, NumPy, Pandas)</p>
                      </div>
                      <div>
                        <p className="font-medium">AI Tools</p>
                        <p>Gemini, ChatGPT, Claude, Gamma, Vercel AI</p>
                      </div>
                      <div>
                        <p className="font-medium">CRMs</p>
                        <p>Salesforce</p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-lg mb-3 baskervville">Military Service</h3>
                    <div className="text-sm text-slate-700">
                      <p className="font-medium">2010-2012 Squad Lead</p>
                      <p>Basic Training and Hebrew Course, Education & Youth Corps</p>
                      <p className="mt-1">
                        Leading a commanders squad in a course of soldiers from around the world during their special
                        basic training in "Michve Alon" base.
                      </p>
                    </div>
                  </section>

                  <section>
                    <h3 className="font-bold text-lg mb-3 baskervville">Volunteer Work</h3>
                    <div className="space-y-2 text-sm text-slate-700">
                      <div>
                        <p className="font-medium">2025 House of Solidarity</p>
                        <p>A mutual aid food support for those in need.</p>
                      </div>
                      <div>
                        <p className="font-medium">2015-2016 The National Project</p>
                        <p>Actions Campaigning for rights of Holocaust survivors.</p>
                      </div>
                      <div>
                        <p className="font-medium">2014-2015 University Mentoring Program</p>
                        <p>Guiding and mentoring students in both academic & personal aspects.</p>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
