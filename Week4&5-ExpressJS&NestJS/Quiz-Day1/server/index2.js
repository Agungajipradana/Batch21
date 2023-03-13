import express from "express";
import dotenv from "dotenv";

// const express = require("express");
dotenv.config();

const Pool = require("pg").Pool;
const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "123456789",
  port: 5432,
  database: "hr-dbase",
});

const app = express();
app.use(express.json());
const port = process.env.PORT || 3005;

app.listen(port, () => console.log(`Server listening on port ${port}`));

// Tabel Regions
app.get("/api/region", (req, res) => {
  pool.query("select *  from regions", [], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
});

app.get("/api/region/:id", (req, res) => {
  const { id } = req.params;
  pool.query("select * from regions where region_id = $1", [id], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
});

app.post("/api/region/", (req, res) => {
  const { name } = req.body;
  pool.query("insert into regions (region_name) values ($1)", [name], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rowsCount);
  });
});

app.put("/api/region/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  pool.query("update regions set region_name = $1 where region_id = $2", [name, id], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).end("Data berhasil update");
  });
});

app.delete("/api/region/:id", (req, res) => {
  const { id } = req.params;

  pool.query("delete from regions where region_id = $1", [id], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).end("Data berhasil dihapus");
  });
});

// Tabel Countries
app.get("/api/countries", (req, res) => {
  pool.query("select * from countries", [], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
});

app.get("/api/countries/:id", (req, res) => {
  const { id } = req.params;
  pool.query("select * from countries where region_id = $1", [id], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
});

app.post("/api/countries/:id", (req, res) => {
  const { id } = req.params;
  const { country_id } = req.body;
  const { country_name } = req.body;

  pool.query("insert into countries (country_id, country_name, region_id) values ($1,$2,$3)", [country_id, country_name, id], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rowsCount);
  });
});

app.put("/api/countries/:id", (req, res) => {
  const { id } = req.params;
  const { country_name } = req.body;

  pool.query("update countries set country_name = $1 where country_id = $2", [country_name, id], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).end("Data berhasil update");
  });
});

app.delete("/api/countries/:id", (req, res) => {
  const { id } = req.params;

  pool.query("delete from countries where country_id = $1", [id], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).end("Data berhasil dihapus");
  });
});

// Tabel Locations
app.get("/api/locations/", (req, res) => {
  pool.query("select * from locations", [], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
});

app.get("/api/locations/:id", (req, res) => {
  const { id } = req.params;
  pool.query("select * from locations where location_id = $1", [id], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
});

app.post("/api/locations/", (req, res) => {
  const { location_id } = req.body;
  const { street_address } = req.body;
  const { postal_code } = req.body;
  const { city } = req.body;
  const { street_provience } = req.body;
  const { country_id } = req.body;

  pool.query(
    "insert into locations (location_id, street_address, postal_code, city, street_provience, country_id ) values ($1,$2, $3, $4, $5, $6)",
    [location_id, street_address, postal_code, city, street_provience, country_id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rowsCount);
    }
  );
});

app.put("/api/locations/:id", (req, res) => {
  const { id } = req.params;
  const { street_address } = req.body;

  pool.query("update locations set street_address = $1 where location_id = $2", [street_address, id], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).end("Data berhasil update");
  });
});

app.delete("/api/locations/:id", (req, res) => {
  const { id } = req.params;

  pool.query("delete from locations where location_id = $1", [id], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).end("Data berhasil dihapus");
  });
});

// Tabel Department
app.get("/api/departments", (req, res) => {
  pool.query("select * from departments", [], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
});

app.get("/api/departments/:id", (req, res) => {
  const { id } = req.params;
  pool.query("select * from departments where department_id = $1", [id], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
});

app.post("/api/departments/", (req, res) => {
  const { department_id } = req.body;
  const { department_name } = req.body;
  const { manager_id } = req.body;
  const { location_id } = req.body;

  pool.query("insert into departments (department_id, department_name, manager_id, location_id ) values ($1,$2, $3, $4)", [department_id, department_name, manager_id, location_id], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rowsCount);
  });
});

app.put("/api/departments/:id", (req, res) => {
  const { id } = req.params;
  const { department_name } = req.body;

  pool.query("update departments set department_name = $1 where department_id = $2", [department_name, id], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).end("Data berhasil update");
  });
});

app.delete("/api/departments/:id", (req, res) => {
  const { id } = req.params;

  pool.query("delete from departments where department_id = $1", [id], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).end("Data berhasil dihapus");
  });
});

// Tabel Jobs
app.get("/api/jobs/", (req, res) => {
  pool.query("select * from jobs", [], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
});

app.get("/api/jobs/:id", (req, res) => {
  const { id } = req.params;
  pool.query("select * from jobs where job_id = $1", [id], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
});

app.post("/api/jobs/", (req, res) => {
  const { job_id } = req.body;
  const { job_title } = req.body;
  const { min_salary } = req.body;
  const { max_salary } = req.body;

  pool.query("insert into jobs (job_id, job_title, min_salary, max_salary ) values ($1,$2, $3, $4)", [job_id, job_title, min_salary, max_salary], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rowsCount);
  });
});

app.put("/api/jobs/:id", (req, res) => {
  const { id } = req.params;
  const { job_title } = req.body;

  pool.query("update jobs set job_title = $1 where job_id = $2", [job_title, id], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).end("Data berhasil update");
  });
});

app.delete("/api/jobs/:id", (req, res) => {
  const { id } = req.params;

  pool.query("delete from jobs where job_id = $1", [id], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).end("Data berhasil dihapus");
  });
});

// Tabel Employees
app.get("/api/employees/", (req, res) => {
  pool.query("select * from employees", [], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
});

app.get("/api/employees/:id", (req, res) => {
  const { id } = req.params;
  pool.query("select * from employees where employee_id = $1", [id], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
});

app.post("/api/employees/", (req, res) => {
  const { employee_id } = req.body;
  const { first_name } = req.body;
  const { last_name } = req.body;
  const { email } = req.body;
  const { phone_number } = req.body;
  const { hire_date } = req.body;
  const { job_id } = req.body;
  const { salary } = req.body;
  const { commision_pct } = req.body;
  const { manager_id } = req.body;
  const { department_id } = req.body;

  pool.query(
    "insert into employees (employee_id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commision_pct, manager_id, department_id   ) values ($1,$2, $3, $4, $5, $6, $7, $8, $9, $10, $11)",
    [employee_id, first_name, last_name, email, phone_number, hire_date, job_id, salary, commision_pct, manager_id, department_id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rowsCount);
    }
  );
});

app.put("/api/employees/:id", (req, res) => {
  const { id } = req.params;
  const { email } = req.body;

  pool.query("update employees set email = $1 where employee_id = $2", [email, id], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).end("Data berhasil update");
  });
});

app.delete("/api/employees/:id", (req, res) => {
  const { id } = req.params;

  pool.query("delete from employees where employee_id = $1", [id], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).end("Data berhasil dihapus");
  });
});

// Tabel Job_history
app.get("/api/job_history/", (req, res) => {
  pool.query("select * from job_history", [], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
});

app.get("/api/job_history/:id", (req, res) => {
  const { id } = req.params;
  pool.query("select * from job_history where employee_id = $1", [id], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
});

app.post("/api/job_history/", (req, res) => {
  const { employee_id } = req.body;
  const { start_date } = req.body;
  const { end_date } = req.body;
  const { job_id } = req.body;
  const { department_id } = req.body;

  pool.query("insert into job_history (employee_id, start_date, end_date, job_id, department_id) values ($1, $2, $3, $4, $5)", [employee_id, start_date, end_date, job_id, department_id], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rowsCount);
  });
});

app.put("/api/job_history/:id", (req, res) => {
  const { id } = req.params;
  const { start_date } = req.body;

  pool.query("update job_history set start_date = $1 where employee_id = $2", [start_date, id], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).end("Data berhasil update");
  });
});

app.delete("/api/job_history/:id", (req, res) => {
  const { id } = req.params;

  pool.query("delete from job_history where employee_id = $1", [id], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).end("Data berhasil dihapus");
  });
});
