<?php

declare(strict_types=1);
/**
 * @copyright Copyright (c) 2018 Morris Jobke <hey@morrisjobke.de>
 *
 * @author Morris Jobke <hey@morrisjobke.de>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

namespace OCA\Support\Settings;

use OCP\IL10N;
use OCP\IURLGenerator;
use OCP\Settings\IIconSection;

class Section implements IIconSection {
	public function __construct(
		protected readonly IL10N $l,
		protected readonly IURLGenerator $url
	) {
	}

	/**
	 * {@inheritdoc}
	 */
	public function getID(): string {
		return 'support';
	}

	/**
	 * {@inheritdoc}
	 */
	public function getName(): string {
		return $this->l->t('Support');
	}

	/**
	 * {@inheritdoc}
	 */
	public function getPriority(): int {
		return 1;
	}

	/**
	 * {@inheritdoc}
	 */
	public function getIcon(): string {
		return $this->url->imagePath('support', 'section.svg');
	}
}
