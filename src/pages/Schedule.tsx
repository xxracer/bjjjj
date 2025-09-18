import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { schedule, scheduleFilters, ClassInfo } from '@/lib/data';

export default function SchedulePage() {
  const daysOfWeek = Object.keys(schedule);

  const filterClasses = (dayClasses: ClassInfo[], program: string) => {
    if (program === 'All') return dayClasses;
    if (program === 'Adults') return dayClasses.filter(c => c.program === 'Adults' || c.program === 'Fundamentals' || c.program === 'Competition' || c.program === 'No-Gi' || c.program === 'Open Mat');
    if (program === 'Kids') return dayClasses.filter(c => c.program === 'Kids' || c.program === 'Homeschool');
    return dayClasses.filter(c => c.program === program);
  };

  return (
    <div >
      <div >
        <h1 >Class Schedule</h1>
        <p >
          Find a class that fits your schedule. We offer a variety of options for all ages and skill levels.
        </p>
      </div>

      <Tabs defaultValue="All" >
        <TabsList >
          {scheduleFilters.map(program => (
            <TabsTrigger key={program} value={program} >{program}</TabsTrigger>
          ))}
        </TabsList>

        {scheduleFilters.map(program => (
          <TabsContent key={program} value={program}>
            <div >
              {daysOfWeek.map(day => {
                const filteredClasses = filterClasses(schedule[day as keyof typeof schedule], program);
                if (filteredClasses.length === 0) return null;

                return (
                  <Card key={day} >
                    <CardHeader>
                      <CardTitle >{day}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Time</TableHead>
                            <TableHead>Program</TableHead>
                            <TableHead>Level</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {filteredClasses.map((classInfo, index) => (
                            <TableRow key={index}>
                              <TableCell >{classInfo.time}</TableCell>
                              <TableCell>{classInfo.program}</TableCell>
                              <TableCell>{classInfo.level}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            {daysOfWeek.every(day => filterClasses(schedule[day as keyof typeof schedule], program).length === 0) && (
              <div >
                <p >No classes available for this program filter.</p>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
