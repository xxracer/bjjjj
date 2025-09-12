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
    <div className="container mx-auto max-w-7xl px-4 py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl">Class Schedule</h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
          Find a class that fits your schedule. We offer a variety of options for all ages and skill levels.
        </p>
      </div>

      <Tabs defaultValue="All" className="w-full">
        <TabsList className="grid w-full grid-cols-3 sm:grid-cols-4 md:grid-cols-8 mb-8 rounded-none bg-secondary/50 p-1 h-auto">
          {scheduleFilters.map(program => (
            <TabsTrigger key={program} value={program} className="rounded-none text-base data-[state=active]:bg-background data-[state=active]:shadow-none py-2">{program}</TabsTrigger>
          ))}
        </TabsList>

        {scheduleFilters.map(program => (
          <TabsContent key={program} value={program}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {daysOfWeek.map(day => {
                const filteredClasses = filterClasses(schedule[day as keyof typeof schedule], program);
                if (filteredClasses.length === 0) return null;

                return (
                  <Card key={day} className="shadow-none rounded-none bg-secondary/50">
                    <CardHeader>
                      <CardTitle className="text-2xl font-headline">{day}</CardTitle>
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
                              <TableCell className="font-medium">{classInfo.time}</TableCell>
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
              <div className="text-center py-16 text-muted-foreground">
                <p className="text-lg">No classes available for this program filter.</p>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
