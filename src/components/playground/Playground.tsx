import { useEffect, useState } from "react";
import "./playground.css";

// export const res = {
//   _id: "67913a7152646930c2f072d5",
//   date: "2025-01-22T18:30:00.000Z",
//   employee_id: "6908",
//   __v: 51,
//   first_in_time: "2025-01-23T03:08:49.000Z",
//   last_out_time: "2025-01-23T13:48:25.000Z",
//   no_of_out: 0,
//   hours_burned: 8.852222222222222,
//   hours_clocked: 10.66,
//   insufficient_hour: false,
//   break_duration: 33.65,
//   is_late: false,
//   late_by_minutes: 0,
//   is_on_leave: false,
//   processing_completed: false,
//   daily_logs: [
//     {
//       _id: "6791b31552646930c2fc0048",
//       employee_id: "6908",
//       employee_name: "Aishwarya Prabhu",
//       card_swipe_time: "2025-01-23T03:08:49.000Z",
//       t_id: 25732739,
//       c_id: 9,
//       gate_number: 1,
//       updated_on: "2025-01-23T08:39:21.000Z",
//       card_id: "07280578",
//       in_out: 0,
//       location: "KTY",
//     },
//     {
//       _id: "6791d47852646930c2fdc5fa",
//       employee_id: "6908",
//       employee_name: "Aishwarya Prabhu",
//       card_swipe_time: "2025-01-23T04:23:38.000Z",
//       t_id: 25733572,
//       c_id: 9,
//       gate_number: 1,
//       updated_on: "2025-01-23T09:54:14.000Z",
//       card_id: "07280578",
//       in_out: 0,
//       location: "KTY",
//     },
//     {
//       _id: "6791d47852646930c2fdc5fb",
//       employee_id: "6908",
//       employee_name: "Aishwarya Prabhu",
//       card_swipe_time: "2025-01-23T04:23:38.000Z",
//       t_id: 25733572,
//       c_id: 9,
//       gate_number: 1,
//       updated_on: "2025-01-23T09:54:14.000Z",
//       card_id: "07280578",
//       in_out: 0,
//       location: "KTY",
//     },
//     {
//       _id: "679202ae52646930c2000850",
//       employee_id: "6908",
//       employee_name: "Aishwarya Prabhu",
//       card_swipe_time: "2025-01-23T07:44:26.000Z",
//       t_id: 25736966,
//       c_id: 9,
//       gate_number: 1,
//       updated_on: "2025-01-23T13:15:30.000Z",
//       card_id: "07280578",
//       in_out: 1,
//       location: "KTY",
//     },
//     {
//       _id: "679202bc52646930c2000b85",
//       employee_id: "6908",
//       employee_name: "Aishwarya Prabhu",
//       card_swipe_time: "2025-01-23T08:18:05.000Z",
//       t_id: 25737682,
//       c_id: 9,
//       gate_number: 1,
//       updated_on: "2025-01-23T13:48:38.000Z",
//       card_id: "07280578",
//       in_out: 0,
//       location: "KTY",
//     },
//     {
//       _id: "6792492352646930c2046c63",
//       employee_id: "6908",
//       employee_name: "Aishwarya Prabhu",
//       card_swipe_time: "2025-01-23T13:48:25.000Z",
//       t_id: 25742308,
//       c_id: 9,
//       gate_number: 1,
//       updated_on: "2025-01-23T19:18:55.000Z",
//       card_id: "07280578",
//       in_out: 1,
//       location: "KTY",
//     },
//   ],
//   breaks: [
//     {
//       out_time: "2025-01-23T07:44:26.000Z",
//       in_time: "2025-01-23T08:18:05.000Z",
//       duration: 33.65,
//       _id: "6793007c307ade4ee17c5310",
//     },
//   ],
//   has_large_breaks: true,
//   has_frequent_breaks: false,
//   improper_logs: [
//     {
//       _id: "6791d47852646930c2fdc5fa",
//       card_swipe_time: "2025-01-23T04:23:38.000Z",
//       t_id: 25733572,
//       c_id: 9,
//       gate_number: 1,
//       updated_on: "2025-01-23T09:54:14.000Z",
//       card_id: "07280578",
//       in_out: 0,
//       location: "KTY",
//     },
//   ],
//   improper_logs_count: 1,
//   has_improper_logs: true,
//   employee_name: "Aishwarya Prabhu",
//   expected_time: 32459,
//   employee_email: "aishwarya.prabhu@qburst.com",
//   location: "Koratty",
//   isHoliday: false,
// };

export const res = {
  _id: "678e96d552646930c2c07ab4",
  date: "2025-01-20T18:30:00.000Z",
  employee_id: "6908",
  __v: 62,
  first_in_time: "2025-01-21T03:02:34.000Z",
  last_out_time: "2025-01-21T13:37:36.000Z",
  no_of_out: 0,
  hours_burned: 9.67,
  hours_clocked: 10.58388888888889,
  insufficient_hour: false,
  break_duration: 54.83333333333333,
  is_late: false,
  late_by_minutes: 0,
  is_on_leave: false,
  processing_completed: false,
  daily_logs: [
    {
      _id: "678f101652646930c2cb2694",
      employee_id: "6908",
      employee_name: "Aishwarya Prabhu",
      card_swipe_time: "2025-01-21T03:02:34.000Z",
      t_id: 25712432,
      c_id: 9,
      gate_number: 1,
      updated_on: "2025-01-21T08:33:07.000Z",
      card_id: "07280578",
      in_out: 0,
      location: "KTY",
    },
    {
      _id: "678f197652646930c2cbd3f0",
      employee_id: "6908",
      employee_name: "Aishwarya Prabhu",
      card_swipe_time: "2025-01-21T03:45:13.000Z",
      t_id: 25712766,
      c_id: 9,
      gate_number: 1,
      updated_on: "2025-01-21T09:15:45.000Z",
      card_id: "07280578",
      in_out: 1,
      location: "KTY",
    },
    {
      _id: "678f1e2652646930c2cc2cdf",
      employee_id: "6908",
      employee_name: "Aishwarya Prabhu",
      card_swipe_time: "2025-01-21T04:06:56.000Z",
      t_id: 25713086,
      c_id: 9,
      gate_number: 1,
      updated_on: "2025-01-21T09:37:24.000Z",
      card_id: "07280578",
      in_out: 0,
      location: "KTY",
    },
    {
      _id: "678f4d1b52646930c2cf4d95",
      employee_id: "6908",
      employee_name: "Aishwarya Prabhu",
      card_swipe_time: "2025-01-21T07:24:59.000Z",
      t_id: 25716192,
      c_id: 9,
      gate_number: 1,
      updated_on: "2025-01-21T12:55:49.000Z",
      card_id: "07280578",
      in_out: 1,
      location: "KTY",
    },
    {
      _id: "678f568b52646930c2cfc1ca",
      employee_id: "6908",
      employee_name: "Aishwarya Prabhu",
      card_swipe_time: "2025-01-21T07:58:06.000Z",
      t_id: 25717027,
      c_id: 9,
      gate_number: 1,
      updated_on: "2025-01-21T13:28:34.000Z",
      card_id: "07280578",
      in_out: 0,
      location: "KTY",
    },
    {
      _id: "678fa61e52646930c2d3f32c",
      employee_id: "6908",
      employee_name: "Aishwarya Prabhu",
      card_swipe_time: "2025-01-21T13:37:36.000Z",
      t_id: 25721572,
      c_id: 9,
      gate_number: 1,
      updated_on: "2025-01-21T19:08:19.000Z",
      card_id: "07280578",
      in_out: 1,
      location: "KTY",
    },
  ],
  breaks: [
    {
      out_time: "2025-01-21T03:45:13.000Z",
      in_time: "2025-01-21T04:06:56.000Z",
      duration: 21.716666666666665,
      _id: "67905d72307ade4ee17b3062",
    },
    {
      out_time: "2025-01-21T07:24:59.000Z",
      in_time: "2025-01-21T07:58:06.000Z",
      duration: 33.11666666666667,
      _id: "67905d72307ade4ee17b3061",
    },
  ],
  has_large_breaks: true,
  has_frequent_breaks: false,
  improper_logs: [],
  improper_logs_count: 0,
  has_improper_logs: false,
  employee_name: "Aishwarya Prabhu",
  expected_time: 32459,
  employee_email: "aishwarya.prabhu@qburst.com",
  location: "Koratty",
  isHoliday: false,
};

type Log = {
  card_swipe_time: string;
  in_out: number; // 0 for entry, 1 for exit
};

type ProcessedLog = {
  intime: string | null; // Time of entry
  outtime: string | null; // Time of exit
  duration: number | null; // Duration in minutes
  conflict: boolean; // Whether there is a conflict
  break: boolean; // Whether this is a break
};

function processLogs(dailyLogs: Log[]): ProcessedLog[] {
  const processedLogs: ProcessedLog[] = [];
  let lastType: number | null = null; // To track the last log type
  let currentEntry: string | null = null; // To track the current entry time

  for (const log of dailyLogs) {
    const { card_swipe_time, in_out } = log;

    if (lastType === in_out) {
      processedLogs.push({
        intime: currentEntry,
        outtime: in_out === 1 ? card_swipe_time : null,
        duration: null,
        conflict: true,
        break: false,
      });
      currentEntry = in_out === 0 ? card_swipe_time : null;
    } else {
      if (in_out === 0) {
        if (currentEntry) {
          processedLogs.push({
            intime: currentEntry,
            outtime: null,
            duration: null,
            conflict: true,
            break: false,
          });
        }
        currentEntry = card_swipe_time;
      } else if (currentEntry) {
        const duration =
          (new Date(card_swipe_time).getTime() -
            new Date(currentEntry).getTime()) /
          (1000 * 60); // Duration in minutes
        processedLogs.push({
          intime: currentEntry,
          outtime: card_swipe_time,
          duration: Math.round(duration),
          conflict: false,
          break: processedLogs.length > 0,
        });
        currentEntry = card_swipe_time;
      }
    }

    lastType = in_out;
  }
  if (currentEntry) {
    processedLogs.push({
      intime: currentEntry,
      outtime: null,
      duration: null,
      conflict: true,
      break: false,
    });
  }

  return processedLogs;
}

function getMinutesOfDay(dateString: string): number {
  const date = new Date(dateString); // Parse the date string into a Date object

  // Get the start of the day (midnight) in the local time zone
  const startOfDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );

  // Calculate the difference in milliseconds
  const diffMilliseconds = date.getTime() - startOfDay.getTime();

  // Convert milliseconds to minutes
  const minutes = Math.floor(diffMilliseconds / 60000);

  return minutes;
}

type Logs = {
  intime: string | null; // Time of entry
  outtime: string | null; // Time of exit
  duration: number | null; // Duration in minutes
  conflict: boolean; // Whether there is a conflict
  break: boolean; // Whether this is a break
  inMinute: number | null;
  outMinute: number | null;
};

const getPositionDetails = (logs: ProcessedLog[]) => {
  const processedLogs: Logs[] = logs.map((log) => {
    const temp: any = { ...log };
    if (log.intime) {
      temp.inMinute = getMinutesOfDay(log.intime);
    }
    if (log.outtime) {
      temp.outMinute = getMinutesOfDay(log.outtime);
    }
    return { ...temp };
  });
  return processedLogs;
};

const getHours = (start: number, end: number) => {
  const result = [];
  let i = Math.ceil(start / 60);
  while (i <= end / 60) {
    const offset = i * 60 - start;
    result.push({
      time: i,
      offset,
    });
    i += 1;
  }
  return result;
};

const Playground = () => {
  const [unit, setUnit] = useState(1);
  const [startMinute, setStartMinute] = useState(480);
  const [lastMinute, setLastMinute] = useState(660);
  // const [hours,setHours]=useState([])
  const [logs, setLogs] = useState<Logs[]>([]);

  const hours = getHours(startMinute, lastMinute);
  useEffect(() => {
    const logs = processLogs(res.daily_logs);
    const result = getPositionDetails(logs);
    setLogs(result);
    const start = result[0].inMinute ?? result[0].outMinute;
    start && setStartMinute(start - 60);
    setLastMinute(
      result[result.length - 1].outMinute ??
        getMinutesOfDay(String(new Date().toISOString()))
    );
  }, []);

  return (
    <div className="playground-div">
      <div className="chart">
        <div className="progress-bar"></div>
        <div className="timeline">
          {hours.map((hour: any) => {
            return <p>{hour.time}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Playground;
