import React from 'react'

const Aside = () => (
  <aside className="summary">
		<table className="summary-table">
			<thead>
				<tr>
					<th colspan="2">Grace Murray Hopper</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td colspan="2">
						<img className="img1" src="assets/img/grace.jpg" alt="Grace Hopper"/>
						<p>Rear Admiral Grace M. Hopper, 1984</p>
					</td>
				</tr>
				<tr>
					<th>Nickname</th>
					<td>Amazing Grace</td>
				</tr>
				<tr>
					<th>Born</th>
					<td>December 9, 1906</td>
				</tr>
				<tr>
					<th>Died</th>
					<td>January 1, 1992 (aged 85)</td>
				</tr>
				<tr>
					<th>Allegiance</th>
					<td>
						<img className="img2" src="assets/img/eeuu.png"/>United States of America</td>
				</tr>
			</tbody>
		</table>
	</aside>
)

export default Aside 