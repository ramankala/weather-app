(()=>{"use strict";document.querySelector("#submitWeather").addEventListener("click",(function(e){const t=document.getElementById("getWeatherData");e.preventDefault(),async function(e){const t=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=81c987ec615926ac74339f92f4a4b044`,{mode:"cors"}),a=await t.json();console.log(a),console.log(a.weather[0].description),a.weather[0].description}(t.value)}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBSzZCQSxTQUFTQyxjQUFjLGtCQUMvQkMsaUJBQWlCLFNBQVMsU0FBU0MsR0FDaEQsTUFBTUMsRUFBa0JKLFNBQVNLLGVBQWUsa0JBRWhERixFQUFFRyxpQkNUVkMsZUFBOEJDLEdBQzFCLE1BQU1DLFFBQWlCQyxNQUFNLHFEQUFxREYsMkNBQW1ELENBQUNHLEtBQU0sU0FDdElDLFFBQW9CSCxFQUFTSSxPQUNuQ0MsUUFBUUMsSUFBSUgsR0FDWkUsUUFBUUMsSUFBSUgsRUFBWUksUUFBUSxHQUFHQyxhQUU1QkwsRUFBWUksUUFBUSxHQUFHQyxZREkxQkMsQ0FBZWQsRUFBZ0JlLFciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9nZXRXZWF0aGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFdlYXRoZXJEYXRhIH0gZnJvbSBcIi4vZ2V0V2VhdGhlclwiO1xuXG5cbmNvbnN0IHdlYXRoZXIgPSAoKCkgPT4ge1xuXG4gICAgY29uc3Qgc3VibWl0V2VhdGhlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXRXZWF0aGVyJyk7XG4gICAgc3VibWl0V2VhdGhlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBjb25zdCB3ZWF0aGVyTG9jYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2V0V2VhdGhlckRhdGEnKTtcbiAgICBcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBnZXRXZWF0aGVyRGF0YSh3ZWF0aGVyTG9jYXRpb24udmFsdWUpO1xuICAgIFxuICAgIH0pO1xufSkoKTsiLCJhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShsb2NhdGlvbil7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY2F0aW9ufSZhcHBpZD04MWM5ODdlYzYxNTkyNmFjNzQzMzlmOTJmNGE0YjA0NGAsIHttb2RlOiAnY29ycyd9KTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG4gICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbik7XG5cbiAgICByZXR1cm4gd2VhdGhlckRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbn1cblxuZXhwb3J0e2dldFdlYXRoZXJEYXRhfTsiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ3ZWF0aGVyTG9jYXRpb24iLCJnZXRFbGVtZW50QnlJZCIsInByZXZlbnREZWZhdWx0IiwiYXN5bmMiLCJsb2NhdGlvbiIsInJlc3BvbnNlIiwiZmV0Y2giLCJtb2RlIiwid2VhdGhlckRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsIndlYXRoZXIiLCJkZXNjcmlwdGlvbiIsImdldFdlYXRoZXJEYXRhIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9